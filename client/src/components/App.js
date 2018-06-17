import ContainerScreen from '../containers/ContainerScreen';
import ContainerRooms from '../containers/ContainerRooms';
import ContainerRules from '../containers/ContainerRules';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from "react-router-dom";

const App = ({rooms}) => {
  return (
    <div className="Site">
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <a href="/" className="App-title">CDG</a>
          {/* <h2 className="App-text">Selecciona una carta para jugar</h2> */}
        </header>
        <div className="Container">
          <Route exact path="/" component={ContainerRooms} />
          {rooms.map(x => 
            <Route exact key={x.roomId} path={"/"+x.roomId} component={ContainerScreen} />
          )}
          <Route exact path="/reglas" component={ContainerRules} />
        </div>
      </div>
      <footer className="footer navbar-fixed-bottom">
        <div className="container">
          <div className="float-left">
            <span className="text-muted">v1.0.3</span>
          </div>
          <div className="float-right">
            <a href='reglas' target="_blank">Reglas</a>&nbsp;&nbsp;·&nbsp;&nbsp;
            <a href='https://github.com/javrd' target="_blank"rel="noopener noreferrer" ><img src={logo} width='20px' alt="Github logo"/>&nbsp;Javrd</a>&nbsp;&nbsp;·&nbsp;&nbsp; 
            <a href='https://github.com/Daniglper' target="_blank"rel="noopener noreferrer" ><img src={logo} width='20px' alt="Github logo"/>&nbsp;Daniglper</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

App.propTypes = {
  rooms: PropTypes.array.isRequired
};
export default App;
