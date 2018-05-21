import PropTypes from 'prop-types';
import React from 'react';
import ContainerPlayer from '../containers/ContainerPlayer';
import ContainerMisc from '../containers/ContainerMisc';

const Screen = ({ state }) => {
  return (
  <div>
    <ContainerMisc />
    <ContainerPlayer player={state} principal={true} />
    <ContainerPlayer player={state.player2} />
    <ContainerPlayer player={state.player3} />
    <ContainerPlayer player={state.player4} />
  </div>
  
  );
};

Screen.propTypes = {
  state: PropTypes.object.isRequired
};

export default Screen;
