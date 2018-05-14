import PropTypes from 'prop-types';
import React from 'react';
import { emitPlayCard } from '../sockets';

const Card = ({  cardType, cardId, hand }) => {
  if(hand){
    return (
      <button className="btn btn-default" onClick={() => emitPlayCard(cardId)}>{cardType}</button>
    ); 
  }else{
    return (
      <span>{cardType} </span>
    );
}
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  hand: PropTypes.bool.isRequired
};

export default Card;
