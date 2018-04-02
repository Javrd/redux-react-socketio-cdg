import SocketIO from 'socket.io';
import { playCard, calculateTurn } from './actions';

/* Conexion */

const io = new SocketIO();
const port = 8000;
io.listen(port);
console.log('listening on port ', port);


/* Colectores de eventos */

const onPlayCard = (store, client) => {

    client.on('playCard', (key) => {

        let state;
        let roomState;
        let room;

        room = getClientRoom(store, client);
        
        store.dispatch(pushLetter(key, room));
        state = store.getState().cdg;
        roomState = state[room];
        console.log((roomState.players[client.id]), 'pressed letter', key,
                'in room', room + '. State:', roomState.word);

        emitState(state, room);
    });
};

const onRestart = (store, client) => {

    client.on('restart', () => {

        let state;
        let roomState;
        let room;

        room = getClientRoom(store, client);

        store.dispatch(restart(room));
        state = store.getState().cdg;
        roomState = state[room];

        console.log('Game restarted on', room, 'by', roomState.players[client.id] + '.');
        console.log('New target is: ' + roomState.target);

        emitState(state, room);
    });
};

export const onCreateRoom = (store, client) => {

    client.on('createRoom', () => {

        let state;
        let roomState;
        let room;
        let numberOfRooms;

        state = store.getState().cdg;
        numberOfRooms = Object.keys(state).length;
        room = "room_" + (numberOfRooms + 1);

        store.dispatch(createRoom(room));
        //store.dispatch(joinRoom(client.id, room));
        state = store.getState().cdg;
        roomState = state[room];
        //client.join(room);

        console.log('Room', room, 'created by', roomState.players[client.id] + '.');
        console.log('New target is: ' + roomState.target);

        //emitState(state, room);
        emitRooms(Object.keys(state));
    });
};


/* Emisores de eventos */

const emitState = (state, room) => {
    let clientState = getClientState(state,room);
    io.to(room).emit('syncState', clientState);
};

const emitRooms = (rooms) => {
    io.emit('syncRooms', rooms);
};


/* Evento de conexion */
export const onConnection = (store) => {

    io.on('connection', (client) => {


        let url = client.request.headers.referer.split('/');
        let room = url[url.length-1];
        let state = store.getState().cdg;

        if (!room.includes("room")){

            let rooms = Object.keys(state);

            // Se registran los eventos que puede lanzar el cliente.
            onCreateRoom(store, client);

            emitRooms(rooms);

        } else {

            let roomState;
            // Se registran los eventos que puede lanzar el cliente.
            onLetterPressed(store, client);
            onRestart(store, client);

            store.dispatch(joinRoom(client.id, room));
            client.join(room);

            roomState = state[room];
            console.log(roomState.players[client.id], 'connected on', room + '.');

            emitState(state, room);
        }


    });
};

/* Utiles */

const getClientRoom = (store, client) => {

    let rooms;
    let room;
    let roomState;

    rooms = Object.keys(client.rooms);
    if (rooms.length === 2){
        rooms.splice(rooms.indexOf(client.id), 1);
        room = rooms[0];
        roomState = store.getState().cdg[room];

        if (roomState.players[client.id] === undefined){
            console.log('ERROR');
            // throw error
        }
    }
    else {

        console.log('ERROR');
        // throw error
    }

    return room;
};


const getClientState = (state, room) => {
    return {
        avalibleRooms: Object.keys(state),
        status: "PLAYING",
        word: state[room].word,
        tries: state[room].tries,
        finish: state[room].finish
    };
};
