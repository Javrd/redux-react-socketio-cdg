import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hangmanApp from './reducers'
import ContainerApp from './containers/ContainerApp'
import { onSyncState, onSyncRooms, emitLetterPressed} from './sockets';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let store = createStore(hangmanApp)
listenToWindowEvent('keypress');
onSyncState(store);
onSyncRooms(store);

render(
  <Provider store={store}>
    <Router>
      <ContainerApp />
    </Router>
  </Provider>,
  document.getElementById('root')
)

function listenToWindowEvent(name) {

  function handleEvent(e) {
    emitLetterPressed(e.key, store);
  }
  window.addEventListener(name, handleEvent);
  return () => window.removeEventListener(name, handleEvent);
}
