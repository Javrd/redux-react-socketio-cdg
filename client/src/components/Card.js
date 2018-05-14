import PropTypes from 'prop-types';
import React from 'react';
import { emitPlayCard } from '../sockets';
import { PLAYING } from '../utils';

const Card = ({  cardType, cardId, hand, cardDescription, playerState }) => {
  if(hand){
    if(playerState===PLAYING){
      return (
        <button data-toggle="tooltip" title={cardDescription} className="btn btn-default" 
        onClick={() => emitPlayCard(cardId)}>{cardType}</button>
      ); 
    }else{
      return (
        <button data-toggle="tooltip" title={cardDescription} className="btn btn-default" disabled="disabled" onClick={() => emitPlayCard(cardId)}>{cardType}</button>
      ); 
    }
    
  }else{
    return (
      <span data-toggle="tooltip" title={cardDescription}>{cardType} </span>
    );
}
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  hand: PropTypes.bool.isRequired,
  cardDescription: PropTypes.string.isRequired,
  playerState: PropTypes.string.isRequired
};

export default Card;
