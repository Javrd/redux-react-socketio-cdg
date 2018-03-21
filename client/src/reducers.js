import { combineReducers } from 'redux'
import { SYNC_STATE, SYNC_ROOMS, WAITING } from './actions'

const initialState = {
  avalibleRooms: [],
  status: WAITING,
  word: '...', 
  tries: 5,
  finish: true
}

function hangman(state = initialState, action) {
  
  switch (action.type) {
    case SYNC_ROOMS:
      let newState = Object.assign({}, state);
      newState.avalibleRooms = action.avalibleRooms
      return newState;

    case SYNC_STATE:
      return action.state;

    default:
      return state;
  }
}

const hangmanApp = combineReducers({
  hangman
});

export default hangmanApp;
