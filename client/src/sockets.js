import openSocket from 'socket.io-client';
import { syncState, syncRooms, decrementaTimer, resetTimer } from './actions';

/* Conexion */
let socket;
if (process.env.NODE_ENV==='production'){
    socket = openSocket('http://cdg-tfg.mooo.com:8000');
} else {
    socket = openSocket('http://localhost:8000');
}

/* Colectores de eventos */
export const onSyncState = store => {
    socket.on('syncState', state => {
        store.dispatch(syncState(state));
    });
};

export const onRedirect = () => {
    socket.on('redirect', () => {
        window.location.href = '/';
        console.log(window.location.href);
    });
};

export const onSyncRooms = store => {
    socket.on('syncRooms', rooms => {
        store.dispatch(syncRooms(rooms));
    });
};

export const onSyncTimer = store => {  
    var timer;  
    socket.on('syncTimer', () => {
        let state = store.getState().cdg;
        clearInterval(timer);
        store.dispatch(resetTimer(state));
        timer = setInterval(() => {
            state = store.getState().cdg;
            if(state.time>0){
                store.dispatch(decrementaTimer(state));
            }            
        }, 1000);
    });
};

export const emitPlayCard = (cardId) => socket.emit('playCard', cardId);

export const emitCreateRoom = () => socket.emit('createRoom');

export const nameChange = () => {
    let newName = document.getElementById("nombre_form").value;
    if(newName.trim()!="" && newName.trim().length<=30){
        socket.emit('nameChange', newName);
    }    
    document.getElementById("nombre_form").value = "";
};
export const emitJoinRoom = (roomId) => {
  window.location.href = '/'+roomId;
};
