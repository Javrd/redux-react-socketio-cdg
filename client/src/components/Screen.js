import PropTypes from 'prop-types';
import React from 'react';
import ContainerTable from '../containers/ContainerTable';
import ContainerPlayer from '../containers/ContainerPlayer';
import ContainerMisc from '../containers/ContainerMisc';

const Screen = ({ state }) => {
  return (
  <div>
    <ContainerPlayer player={state} principal={true} />
    {/* <div>{state.playedCard}</div> */}
    <ContainerPlayer player={state.player2} />
    <ContainerPlayer player={state.player3} />
    <ContainerPlayer player={state.player4} />
    <ContainerMisc />
  </div>
  
  );
};

Screen.propTypes = {
  state: PropTypes.object.isRequired
};

export default Screen;
