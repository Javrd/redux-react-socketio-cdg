import SocketIO from 'socket.io';
import { playCard, calculateTurn, startRound, startGame, finishGame, joinRoom } from './actions';
import { getPlayer, getRoom, getClientRoomId, getClientState, PLAYING} from './utils';

/* Conexion */

const io = new SocketIO();
const port = 8000;
io.listen(port);
console.log('listening on port ', port);


/* Colectores de eventos */

const onPlayCard = (store, client) => {

    client.on('playCard', (cardId) => {

        let state;
        let roomState;
        let roomId;

        roomId = getClientRoomId(store, client);
        
        store.dispatch(playCard(cardId, client.id, roomId));
        state = store.getState().cdg;
        roomState = getRoom(state.rooms, roomId);
        console.log(getPlayer(roomState.players,client.id).playerId, 'played card with id', cardId,
                'in room', roomId );

        let finishedTurn = true;
        for(let i=0; i<4; i++){
            if(roomState.players[i].state == PLAYING){
                finishedTurn = false;
                break;
            }
        }

        if(finishedTurn){
            store.dispatch(calculateTurn(roomId));
            if(length(roomState.players[0].hand) == 0){
                if(length(roomState.deck) == 0){
                    store.dispatch(finishGame(roomId));
                }else{
                    store.dispatch(startRound(roomId));
                }
            }
            emitState(roomState);
        }

    });
};

//TODO
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

const emitState = (roomState) => {
    let player;
    for(let i=0; i<4; i++){
        player = roomState.players[i];
        let clientState = getClientState(roomState, player);
        io.to(player.playerId).emit('syncState', clientState);
    }
};

const emitRooms = (rooms) => {
    io.emit('syncRooms', rooms);
};


/* Evento de conexion */
export const onConnection = (store) => {

    io.on('connection', (client) => {

        let state = store.getState().cdg;
        let roomState;
        //De prueba
        let roomId = '001';
        // Se registran los eventos que puede lanzar el cliente.
        onPlayCard(store, client);

        store.dispatch(joinRoom(client.id, roomId));
        client.join(roomId);

        roomState = getRoom(state.rooms, roomId);
        console.log(getPlayer(roomState.players,client.id), 'connected on', roomId + '.');

        io.to(roomId).emit('syncNewPlayer', client.id);

        if(length(roomState.players)==4){
            store.dispatch(startGame(roomId));
            store.dispatch(startRound(roomId));
            emitState(roomState);
        }
        // let url = client.request.headers.referer.split('/');
        // let room = url[url.length-1];
        // let state = store.getState().cdg;

        // if (!room.includes("room")){

        //     let rooms = Object.keys(state);

        //     // Se registran los eventos que puede lanzar el cliente.
        //     onCreateRoom(store, client);

        //     emitRooms(rooms);

        // } else {

        //     let roomState;
        //     // Se registran los eventos que puede lanzar el cliente.
        //     onLetterPressed(store, client);
        //     onRestart(store, client);

        //     store.dispatch(joinRoom(client.id, room));
        //     client.join(room);

        //     roomState = state[room];
        //     console.log(roomState.players[client.id], 'connected on', room + '.');

        //     emitState(state, room);
        // }


    });
};
