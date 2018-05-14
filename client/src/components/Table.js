import PropTypes from 'prop-types';
import React from 'react';
import ContainerCard from '../containers/ContainerCard';

const Table = ({  cards, hand }) => {
  return (      
    <div>
      {cards.map((card) =>
        <span key={card.id}><ContainerCard card={card} hand={hand} /></span>
      )}
    </div>
  );
};

Table.propTypes = {
  cards: PropTypes.array.isRequired,
  hand: PropTypes.bool.isRequired
};

export default Table;
