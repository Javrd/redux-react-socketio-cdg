import PropTypes from 'prop-types';
import React from 'react';
import ContainerTable from '../containers/ContainerTable';
import {BOT} from '../utils.js';
import { nameChange } from '../sockets';
import edit from '../Edit_icon.svg';

const Player = ({  player, principal, playedCard, finished }) => {  
  return (
    <div className={principal ? 'card text-white bg-primary mb-3' : 'card text-white bg-danger mb-3'}>
      <div className="card-header">
        {player.name} &nbsp;
        {(principal && !finished) && 
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#nickModal">
          <img src={edit} width="20"/>
        </button>
        }
        {/* Modal */}
        <div className="modal fade" id="nickModal" tabindex="-1" role="dialog" aria-labelledby="nickModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark" id="nickModalLabel">¡Cambia tu nombre, {player.name}!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="form-inline justify-content-center" >
                  <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" id="nombre_form" placeholder="Nuevo nombre" />
                  </div>
                </div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={() => nameChange()}>Cambiar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Modal */}
        {player.type===BOT&& <span> - Ha dejado la partida</span>}
      </div>

      <div className="card-body">
          <h5 className="card-title">
            <div><span>Puntuación {player.score}</span>
            {(playedCard && principal) &&
            <span> - Carta jugada {playedCard.type} </span>
            }</div>
          </h5>
          {principal &&
            <div>
              <h5 className="card-title">
                <div>Mano</div>
              </h5>
              <p className="card-text">
                <ContainerTable cards={player.hand} hand={true} /> 
              </p>
            </div>
          }
          <p className="card-text">
            <ContainerTable cards={player.table} hand={false} />
          </p>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  principal: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
  playedCard: PropTypes.object.isRequired
};

export default Player;
