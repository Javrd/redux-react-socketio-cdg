import React from 'react'
import PropTypes from 'prop-types'
import { emitJoinRoom, emitCreateRoom } from '../sockets';


const Rooms = ( {avalibleRooms} ) => {
  return (
    <div>
      <div className="Item">
        <ul>
          {avalibleRooms.map(x => 
          <li>
            <button type="button" onClick={() => emitJoinRoom(x)}>{x}</button>
          </li>
          )}
        </ul>
      </div>
      <div className="Item">
        <button type="button" onClick={() => emitCreateRoom()}>Create Room</button>
      </div>
    </div>
  )
}

Rooms.propTypes = {
  avalibleRooms: PropTypes.array.isRequired
}

export default Rooms
