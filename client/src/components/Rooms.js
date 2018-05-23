import React from 'react';
import PropTypes from 'prop-types';
import { emitJoinRoom, emitCreateRoom } from '../sockets';
import {IN_GAME, FINISHED} from '../utils.js';


const Rooms = ( {rooms} ) => {
  return (
    <div>
      <div>
        {rooms.map(x => {
          let extra ="";
          if(x.state==IN_GAME){ extra = " [En Partida]";}
          if(x.players<4 && x.state!==FINISHED){            
            return (
              <div key={x.roomId}>              
              <br/>
                <button type="button" className="btn btn-default" onClick={() => emitJoinRoom(x.roomId)}>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"+extra
                }</button>
              </div>
            );
          }else{
            return (
              <div key={x.roomId}>              
              <br/>
                <button type="button" className="btn" disabled>{
                  "Sala "+x.roomId+" - Jugadores: "+x.players+"/4"+extra
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
