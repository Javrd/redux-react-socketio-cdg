import PropTypes from 'prop-types';
import React from 'react';
import ContainerTable from '../containers/ContainerTable';

const Player = ({  player, principal }) => {  
  return (
    <div className={principal ? 'card text-white bg-primary mb-3' : 'card text-white bg-danger mb-3'}>
      <div className="card-header">
        {player.name}
      </div>

      <div className="card-body">
          <h5 className="card-title">
            <div>Score: {player.score}</div>
          </h5>
          {principal &&
            <div>
              <h5 className="card-title">
                <div>Mano:</div>
              </h5>
              <p className="card-text">
                <ContainerTable cards={player.hand} hand={true} /> 
              </p>
            </div>
          }
          <h5 className="card-title">
            <div>Mesa:</div>
          </h5>
          <p className="card-text">
            <ContainerTable cards={player.table} hand={false} />
          </p>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  principal: PropTypes.bool.isRequired
};

export default Player;
