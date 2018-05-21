import PropTypes from 'prop-types';
import React from 'react';

const Misc = ({  state, time }) => {    
    
  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-body">
        <p className="card-text">
          <div>Tiempo: {time}</div>
          <div>Turno: {state.turn}</div>
          <div>Ronda: {state.round}</div>
          <div>Estado del jugador: {state.playerState}</div>
          <div>Estado de la sala: {state.state}</div>
        </p>
      </div>
    </div>
  );
};

Misc.propTypes = {
  state: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired
};

export default Misc;
