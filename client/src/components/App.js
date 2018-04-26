import ContainerScreen from '../containers/ContainerScreen';
import ContainerRooms from '../containers/ContainerRooms';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from "react-router-dom";

const App = ({rooms}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Cdg game</h1>
        <h2 className="App-text">Selecciona una carta para jugar</h2>
      </header>
      <div className="App-intro">
        <div className="Container">
          <Route exact path="/" component={ContainerRooms} />
          {rooms.map(x => 
            <Route exact key={x.roomId} path={"/"+x.roomId} component={ContainerScreen} />
          )}
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  rooms: PropTypes.array.isRequired
};
export default App;
