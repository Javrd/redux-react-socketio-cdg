import { render } from 'react-dom';
import { createStore } from 'redux';
import hangmanApp from './reducers';
import { onSyncState, onSyncRooms} from './sockets';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ContainerApp from './containers/ContainerApp';

let store = createStore(hangmanApp);
onSyncState(store);
onSyncRooms(store);

render(
  <Provider store={store}>
    <Router>
      <ContainerApp />
    </Router>
  </Provider>,
  document.getElementById('root')
);

