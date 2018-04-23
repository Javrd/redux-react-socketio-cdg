import React from 'react';
import PropTypes from 'prop-types';
import { emitJoinRoom, emitCreateRoom } from '../sockets';


const Rooms = ( {rooms} ) => {
  return (
    <div>
      <div className="Item">
        <ul>
          {rooms.map(x => {
            if(x.players<4){
              return (
                <li>
                  <button type="button" onClick={() => emitJoinRoom(x.roomId)}>{
                    "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                  }</button>
                </li>
              );
            }else{
              return (
                <li>
                  <button type="button" disabled>{
                    "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                  }</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="Item">
        <button type="button" onClick={() => emitCreateRoom()}>Crear sala</button>
      </div>
    </div>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default Rooms;
