import { combineReducers } from 'redux';
import { SYNC_STATE, SYNC_ROOMS, DECREMENTA_TIMER, RESET_TIMER } from './actions';
import {WAITING, LOBBY, FINISHED} from './utils';

const initialState = {
  playerId: 0,
  hand:[],
  table:[],
  playedCard: null,
  playerState: WAITING,
  score: 0,
  player2: {table: [], score: 0},
  player3: {table: [], score: 0},
  player4: {table: [], score: 0},
  state: LOBBY,
  round: 0,
  turn: 0,
  rooms: [],
  time: 60
};

function cdg(state = initialState, action) {
  
  switch (action.type) {
    case SYNC_ROOMS:{
      let newState = Object.assign({}, state);
      newState.rooms = action.rooms;
      return newState;
    }
    case SYNC_STATE:{
      let newState;
      if(state.state!==FINISHED){          
        let time =  state.time;
        newState = Object.assign({}, action.state);
        newState.rooms = state.rooms;
        newState.time = time;
      }else{
        newState = Object.assign({}, state);
      }
      return newState;
    }
    case DECREMENTA_TIMER:{
      let newState = Object.assign({}, action.state);
      newState.time--;
      return newState;
    }
    case RESET_TIMER:{
      let newState = Object.assign({}, action.state);
      newState.time=60;
      return newState;
    }
    default:{
      return state;
    }
  }
}

const cdgApp = combineReducers({
  cdg
});

export default cdgApp;
