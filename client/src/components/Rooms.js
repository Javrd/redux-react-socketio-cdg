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
              <div key={x.roomId}>              
              <br/>
                <button type="button" className="btn btn-default" onClick={() => emitJoinRoom(x.roomId)}>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                }</button>
              </div>
            );
          }else{
            return (
              <div key={x.roomId}>              
              <br/>
                <button type="button" className="btn" disabled>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"
                }</button>
              </div>
            );
          }
        })}
      </div> <br/>
      <div>
        <button type="button" className="btn btn-info" onClick={() => emitCreateRoom()}>Crear sala</button>
      </div>
    </div>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default Rooms;
