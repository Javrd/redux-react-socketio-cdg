import React from 'react'
import ContainerScreen from '../containers/ContainerScreen'
import ContainerRooms from '../containers/ContainerRooms'
import '../css/App.css';
import logo from '../logo.svg';
import { WAITING, PLAYING } from '../actions';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = ( {status, avalibleRooms} ) => {
  let component;
  switch (status) {
    case WAITING:
      component = <ContainerRooms />
      break;

    case PLAYING:
    default:
      component = <ContainerScreen />
      break;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hangman game</h1>
        <h2 className="App-text">Press some keys to guess the word</h2>
      </header>
      <div className="App-intro">
        <div className="Container">
          <Route exact path="/" component={ContainerRooms} />
          {avalibleRooms.map(x =>
            <Route exact path={"/"+x} component={ContainerScreen} />
          )}
        </div>
      </div>
    </div>
  )
};

App.propTypes = {
  status: PropTypes.string.isRequired
}
export default App
