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
        <button onClick={() => emitPlayCard(card.id)}>{card.type}</button>
      )}</div>
      <div>Mesa:<div>{state.table.map((card) =>
        <span>{card.type} </span>
      )}</div></div>
      {/* <div>{state.playedCard}</div> */}
      <div>Player state: {state.playerState}</div>
      <div>Score: {state.score}</div>
      ---------------------------------------------------
      <div>Player2</div>
      <div>Mesa:<div>{state.player2.table.map((card) =>
        <span>{card.type} </span>
      )}</div></div>
      <div>Score: {state.player2.score}</div>
      ---------------------------------------------------
      <div>Player3</div>
      <div>Mesa:<div>{state.player3.table.map((card) =>
        <span>{card.type} </span>
      )}</div></div>
      <div>Score: {state.player3.score}</div>
      ---------------------------------------------------
      <div>Player4</div>
      <div>Mesa:<div>{state.player4.table.map((card) =>
        <span>{card.type} </span>
      )}</div></div>
      <div>Score: {state.player4.score}</div>
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
