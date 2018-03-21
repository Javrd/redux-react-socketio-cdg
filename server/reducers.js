import { combineReducers } from 'redux'
import { PLAY_CARD, CALCULATE_TURN, START_ROUND } from './actions'
import { emitState } from './sockets'
import { DECK } from './deck'

const WAITING = 'WAITING' //player has already selected a card in this turn
const PLAYING = 'PLAYING' //player is choosing a card

const LOBBY = 'LOBBY' //room hasn't started yet
const IN_GAME = 'IN_GAME' //player are playing

const initialPlayerState = {
  playerId: 0,
  hand:[],
  table:[],
  discarded:[],
  playedCard: null,
  state: WAITING
}
const initialRoomState = {
  players: [initialPlayerState, initialPlayerState, initialPlayerState, initialPlayerState],
  deck: Object.assign({}, DECK),
  state: LOBBY,
  round: 0,
  turn:0
}
const initialState = {};

function cdg(state = initialState, action) {

  let newState = Object.assign({}, state);
  let roomState;

  switch (action.type) {
    case START_ROUND:{
      roomState = newState[action.room];
      let deck = roomState.deck;
      roomState.round++;

      for(let i=0; i<4; i++){
        let player = roomState.players[i];
        for(let j=0; j<8; j++){
          const randomNumber = Math.floor(Math.random()*deck.length);
          player.hand.append(deck[randomNumber]);
          deck.splice(randomNumber,1);
        }
      }
      return newState
    }
    case PLAY_CARD:{
      roomState = newState[action.room];
      let player;
      for(let i=0; i<4; i++){
        if(roomState.players[i].playerId == action.playerId){
          player = roomState.players[i];
          break;
        }
      }
      for(let i=0; i<player.hand.length; i++){
        if(player.hand[i].cardId == action.cardId){
          player.playedCard = player.hand[i];
          break;
        }
      }
      player.state = WAITING;
      return newState;
    }
    case CREATE_ROOM:{
      roomState = newState[action.room] = Object.assign({}, initialRoomState);;
      newWord = getNewWord();
      roomState.target = newWord.target;
      roomState.word = newWord.word;
      roomState.tries = 5;
      roomState.finish = false;
      return newState;
    }
    case JOIN_ROOM:{
      roomState = newState[action.room]
      roomState.numberOfPlayers++;
      roomState.players[action.playerId] = 'player' + roomState.numberOfPlayers;
      
      return newState;
    }
    default:{
      return state;
    }
  }
}

const hangmanApp = combineReducers({
  cdg
});

export default hangmanApp;
