import PropTypes from 'prop-types';
import React from 'react';
import { nameChange } from '../sockets';
import { FINISHED } from '../utils';

const Misc = ({  state, time }) => {    
  let winners;
  if(state.state===FINISHED){
    let player1 = {name: state.name, score: state.score};
    let player2 = {name: state.player2.name, score: state.player2.score};
    let player3 = {name: state.player3.name, score: state.player3.score};
    let player4 = {name: state.player4.name, score: state.player4.score};
    winners = [player1,player2,player3,player4];
    winners.sort((a,b) => a.score<b.score);
  }

  return (
    <div className="card text-white bg-success mb-3">
      <div className="card-body">
        <p className="card-text">
          {state.state!==FINISHED ?
          <div>
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
          </div>
          :
          <div>
            {winners.map((w, i) =>{
              if(i===0){
                return <h3 key={w.name+w.score+i}>{i+1}. {w.name} - {w.score} </h3>
              }else{
                return <div key={w.name+w.score+i}>{i+1}. {w.name} - {w.score} </div>
              }
            })}
          </div>
          }  
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
