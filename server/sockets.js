import SocketIO from 'socket.io';
import { getPlayer, getRoom, getClientRoomId, getClientState, PLAYING, LOBBY, HUMAN, FINISHED} from './utils';
import { playCard, calculateTurn, startRound, startGame, finishGame, 
    joinRoom, leftRoom, createRoom, finishTimer, nameChange } from './actions';
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
        console.log(getPlayer(roomState.players,client.id).name, 'played card with id', cardId,
                'in room', roomId );

        finishedTurn(store,roomState,roomId);
    });
};

const onNameChange = (store, client) => {

    client.on('nameChange', (newName) => {

        let state;
        let roomState;
        let roomId;

        roomId = getClientRoomId(store, client);
        store.dispatch(nameChange(newName, client.id, roomId));
        state = store.getState().cdg;
        roomState = getRoom(state.rooms, roomId);

        emitState(roomState);
    });
};

const onCreateRoom = (store, client) => {

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

const onDisconnection = (store, client) => {

    client.on('disconnect', (reason) => {

        let state = store.getState().cdg;
        let url = client.request.headers.referer.split('/');
        let roomId = url[url.length-1];

        let roomState = getRoom(state.rooms, roomId);
        // Se registran los eventos que puede lanzar el cliente.
        console.log("Desconexion de " + client.id +" en " + roomId)
        store.dispatch(leftRoom(client.id, roomId));
        
        emitState(roomState);
        emitRooms(state.rooms);            
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
        return {roomId: x.roomId, players: x.players.filter(p => p.type === HUMAN).length, state: x.state};
    });
    if (client){
        io.to(client.id).emit('syncRooms', rooms);
    } else {
        io.emit('syncRooms', rooms);
    }
};

const emitRedirect = (clientId) => {
    io.to(clientId).emit('redirect');
};

const emitTimer = (roomState) => {
    let player;
    for(let i=0; i<roomState.players.length; i++){
        player = roomState.players[i];
        let clientState = getClientState(roomState, player);
        io.to(player.playerId).emit('syncTimer');
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

        } else if(roomId.match(/\d+/)){
            let roomState = getRoom(state.rooms, roomId);
            if(roomState!=null && roomState.players.filter(p => p.type===HUMAN).length<4
                && roomState.state!==FINISHED) {
                // Se registran los eventos que puede lanzar el cliente.
                onDisconnection(store, client);
                onPlayCard(store, client);
                onNameChange(store, client);
                
                client.join(roomId);
                store.dispatch(joinRoom(client.id, roomId));

                console.log(client.id, 'connected on', roomId + '.');

                if(roomState.players.length==4 && roomState.state===LOBBY){
                    store.dispatch(startGame(roomId));
                    store.dispatch(startRound(roomId));
                    asyncTimer(store, roomId);
                }
                
                emitState(roomState);
                emitRooms(state.rooms);            
            }else{
                emitRedirect(client.id);
            }
        } else if(roomId==="reglas") {
            
        }

    });
};
var timer;
async function asyncTimer(store, roomId) {

    let state = store.getState().cdg;
    let roomState = getRoom(state.rooms,roomId);
    emitTimer(roomState);
    clearTimeout(timer);
    await new Promise(resolve => {
        timer = setTimeout(() => {
            resolve();
        }, 60000);//tiempo por turno
        });

    store.dispatch(finishTimer(roomId));
    
    state = store.getState().cdg;
    roomState = getRoom(state.rooms,roomId);

    finishedTurn(store, roomState, roomId);

}

function finishedTurn(store, roomState, roomId){
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
                asyncTimer(store, roomId);
            }
        }else{
            asyncTimer(store, roomId);
        }
        
    }
    emitState(roomState);
}