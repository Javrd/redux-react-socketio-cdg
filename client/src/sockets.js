import openSocket from 'socket.io-client';
import { syncState, syncRooms } from './actions';

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

export const onSyncRooms = store => {
    socket.on('syncRooms', rooms => {
        store.dispatch(syncRooms(rooms));
    });
};

export const emitPlayCard = (cardId) => socket.emit('playCard', cardId);

export const emitCreateRoom = () => socket.emit('createRoom');

export const emitJoinRoom = (roomId) => {
  window.location.href = '/'+roomId;
};
