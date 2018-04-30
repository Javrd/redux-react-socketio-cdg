import React from 'react';
import PropTypes from 'prop-types';
import { emitJoinRoom, emitCreateRoom } from '../sockets';


const Rooms = ( {rooms} ) => {
  return (
    <div>
      <div>
        {rooms.map(x => {
          if(x.players<4){
            return (
                <button key={x.roomId} type="button" onClick={() => emitJoinRoom(x.roomId)}>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                }</button>
            );
          }else{
            return (
                <button key={x.roomId} type="button" disabled>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                }</button>
            );
          }
        })}
      </div>
      <div>
        <button type="button" onClick={() => emitCreateRoom()}>Crear sala</button>
      </div>
    </div>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default Rooms;
