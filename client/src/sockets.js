import openSocket from 'socket.io-client';
import { syncState, syncRooms, PLAYING } from './actions'

/* Conexion */
export const  socket = openSocket('http://localhost:8000');

/* Colectores de eventos */
export const onSyncState = store => {
    socket.on('syncState', state => {
        store.dispatch(syncState(state));
        console.log('hola'+state);
    });
};

export const onSyncRooms = store => {
    socket.on('syncRooms', avalibleRooms => {
        store.dispatch(syncRooms(avalibleRooms));
    });
};

/* Emisores de eventos */
export const emitLetterPressed = (key, store) => {
    let state = store.getState().hangman;
    if (state.status === PLAYING && !state.finish){
        socket.emit('letterPressed', key);
    }
};

export const emitRestart = () => socket.emit('restart');

export const emitCreateRoom = (room) => socket.emit('createRoom', room)

export const emitJoinRoom = (room) => {
  socket.emit('joinRoom', room);
  window.location.href = '/'+room;
}
