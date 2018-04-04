// import PropTypes from 'prop-types';
import React from 'react';
import { emitPlayCard } from '../sockets';

const Screen = ({ state }) => {
  return (
  <div>
    <div className="Item">
      <div>Player</div>
      <div>{state.playerId}</div>
      <div>Mano:{state.hand.map((card) =>
        <button onClick={(e) => emitPlayCard(card.id)}>{card.id}</button>
      )}</div>
      <div>Mesa:{state.table.map((card) =>
        <div> {card.id}  </div> 
      )}</div>
      <div>{state.playedCard}</div>
      <div>{state.playerState}</div>
      <div>{state.score}</div>
      ---------------------------------------------------
      <div>Player2</div>
      Mesa:{state.player2.table.map((card) =>
        <div> {card.id}  </div> 
      )}
      <div>{state.player2.score}</div>
      ---------------------------------------------------
      <div>Player3</div>
      Mesa:{state.player3.table.map((card) =>
        <div> {card.id}  </div> 
      )}
      <div>{state.player3.score}</div>
      ---------------------------------------------------
      <div>Player4</div>
      Mesa:{state.player4.table.map((card) =>{
        <div> {card.id}  </div> 
      })}
      <div>{state.player4.score}</div>
      ---------------------------------------------------
      <div>Misc</div>
      <div>estado sala:{state.state}</div>
      <div>ronda: {state.round}</div>
      <div>turno: {state.turn}</div>
    </div>
  </div>
  
  );
};

// Screen.propTypes = {
//   word: PropTypes.string.isRequired,
//   tries: PropTypes.number.isRequired
// };

export default Screen;
