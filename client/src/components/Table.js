import PropTypes from 'prop-types';
import React from 'react';
import ContainerCard from '../containers/ContainerCard';

const Table = ({  cards, hand }) => {
  if(hand){
    return (
      <div>
        <div>
        {cards.map((card) =>
          <span key={card.id}><ContainerCard card={card} hand={hand} /></span>            
        )}
        </div>
    </div>
    );
  }else{
    return (
      <div>   
        <div>   
          <span className="ronda">Ronda 1 </span>
            {cards.filter(c => c.roundPlayed===1).map((card) =>{
              return <span key={card.id}><ContainerCard card={card} hand={hand} /></span> 
            })}
          </div>
          <div> 
          { cards.length>=8 &&
          <span className="ronda">Ronda 2 </span>}
          {cards.filter(c => c.roundPlayed===2).map((card) =>{
            return <span key={card.id}><ContainerCard card={card} hand={hand} /></span> 
          })}
          </div>
          <div>
          { cards.length>=16 &&
          <span className="ronda">Ronda 3 </span>}
          {cards.filter(c => c.roundPlayed===3).map((card) =>{
            return <span key={card.id}><ContainerCard card={card} hand={hand} /></span> 
          })}
          </div>
    </div>
    );
  }
  
};

Table.propTypes = {
  cards: PropTypes.array.isRequired,
  hand: PropTypes.bool.isRequired
};

export default Table;
