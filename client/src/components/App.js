import ContainerScreen from '../containers/ContainerScreen';
// import ContainerRooms from '../containers/ContainerRooms';
import '../css/App.css';
import logo from '../logo.svg';
// import PropTypes from 'prop-types';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Cdg game</h1>
        <h2 className="App-text">Selecciona una carta para jugar</h2>
      </header>
      <div className="App-intro">
        <div className="Container">
            <ContainerScreen />
        </div>
      </div>
    </div>
  );
};

// App.propTypes = {
//   status: PropTypes.string.isRequired
// };
export default App;
