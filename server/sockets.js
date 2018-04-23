import SocketIO from 'socket.io';
import { playCard, calculateTurn, startRound, startGame, finishGame, joinRoom, createRoom } from './actions';
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
            if(roomState.players[i].playerState == PLAYING){
                finishedTurn = false;
                break;
            }
        }

        if(finishedTurn){
            store.dispatch(calculateTurn(roomId));
            if(roomState.players[0].hand.length == 0){
                if(roomState.deck.length == 0){
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
        let room;
        let newState;

        store.dispatch(createRoom());

        newState = store.getState().cdg;   
        room = ""+newState.rooms.length-1;
        console.log('Room', room, 'created by', client.id + '.');

        emitRooms(newState.rooms);
    });
};


/* Emisores de eventos */

const emitState = (roomState) => {
    let player;
    for(let i=0; i<roomState.players.length; i++){
        player = roomState.players[i];
        let clientState = getClientState(roomState, player);
        io.to(player.playerId).emit('syncState', clientState);
    }
};

const emitRooms = (rooms, client) => {
    rooms = rooms.map(x => {
        return {roomId: x.roomId, players: x.players.length};
    });
    if (client){
        io.to(client.id).emit('syncRooms', rooms);
    } else {
        io.emit('syncRooms', rooms);
    }
};


/* Evento de conexion */
export const onConnection = (store) => {

    io.on('connection', (client) => {

        let state = store.getState().cdg;
        let url = client.request.headers.referer.split('/');
        let roomId = url[url.length-1];

        if (!roomId.match(/\d+/)){
            // Se registran los eventos que puede lanzar el cliente.
            onCreateRoom(store, client);
            emitRooms(state.rooms, client);

        } else {
            let roomState = getRoom(state.rooms, roomId);
            if(roomState.players.length<4) {
                // Se registran los eventos que puede lanzar el cliente.
                onPlayCard(store, client);

                client.join(roomId);
                store.dispatch(joinRoom(client.id, roomId));

                console.log(client.id, 'connected on', roomId + '.');

                if(roomState.players.length==4){
                    store.dispatch(startGame(roomId));
                    store.dispatch(startRound(roomId));
                }
                
                emitState(roomState);
                emitRooms(state.rooms);
            }
        }

    });
};
