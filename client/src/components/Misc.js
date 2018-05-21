import PropTypes from 'prop-types';
import React from 'react';
import { nameChange } from '../sockets';

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

          <div className="form-inline justify-content-center" >
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" id="nombre_form" placeholder="Nuevo nombre" />
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={() => nameChange()}>Enviar</button>
          </div>

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
