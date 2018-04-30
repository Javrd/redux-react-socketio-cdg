import PropTypes from 'prop-types';
import React from 'react';
import ContainerCard from '../containers/ContainerCard';

const Table = ({  cards, hand }) => {
  return (      
    <div>
      {cards.map((card) =>
        <ContainerCard card={card} hand={hand} key={card.id} />
      )}
    </div>
  );
};

Table.propTypes = {
  cards: PropTypes.array.isRequired,
  hand: PropTypes.bool.isRequired
};

export default Table;
