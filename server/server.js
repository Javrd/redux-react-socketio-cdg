
import { createStore } from 'redux';
import { onConnection } from './sockets';
import cdgApp from './reducers';

let store = createStore(cdgApp);
console.log('Server started.');
onConnection(store);