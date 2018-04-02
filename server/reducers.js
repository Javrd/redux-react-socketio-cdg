import { combineReducers } from 'redux';
import { PLAY_CARD, CALCULATE_TURN, START_ROUND, START_GAME, FINISH_GAME } from './actions';
import { DECK, POINTS, PAREJA, TRIO } from './deck';

const WAITING = 'WAITING'; //player has already selected a card in this turn
const PLAYING = 'PLAYING'; //player is choosing a card

const LOBBY = 'LOBBY'; //room hasn't started yet
const IN_GAME = 'IN_GAME'; //player are playing
const FINISHED = 'FINISHED'; //game is over

const initialPlayerState = {
  playerId: 0,
  hand:[],
  table:[],
  playedCard: null,
  state: WAITING,
  score: 0
};
const initialRoomState = {
  players: [initialPlayerState, initialPlayerState, initialPlayerState, initialPlayerState],
  deck: Object.assign({}, DECK),
  state: LOBBY,
  round: 0,
  turn: 0
};
const initialState = {};

function cdg(state = initialState, action) {

  let newState = Object.assign({}, state);
  let roomState = newState[action.room];

  switch (action.type) {
    case START_ROUND:{
      let deck = roomState.deck;
      roomState.round++;
      roomState.turn = 1;

      for(let i=0; i<4; i++){
        let player = roomState.players[i];
        for(let j=0; j<8; j++){
          const randomNumber = Math.floor(Math.random()*deck.length);
          player.hand.append(deck[randomNumber]);
          deck.splice(randomNumber,1);
        }
      }
      return newState;
    }
    case PLAY_CARD:{
      let player;
      for(let i=0; i<4; i++){
        if(roomState.players[i].playerId == action.playerId){
          player = roomState.players[i];
          break;
        }
      }
      let cheats = true;
      for(let i=0; i<player.hand.length; i++){
        if(player.hand[i].cardId == action.cardId){
          player.playedCard = player.hand[i];
          player.hand.splice(i,1);
          cheats= false;
          break;
        }
      }
      if(cheats){
        player.playedCard = player.hand[0];
        console.log('player '+(player.playerId)+' is trying to cheat');
      }
      player.state = WAITING;
      return newState;
    }
    case CALCULATE_TURN:{
      //cada jugador pasa a tener su playedCard en mesa y cambia su estado
      for(let i=0; i<4; i++){
        roomState.players[i].playedCard.turnPlayed =  roomState.turn;
        roomState.players[i].playedCard.roundPlayed =  roomState.round;
        roomState.players[i].table.push(roomState.players[i].playedCard);
        roomState.players[i].playedCard = null;
        roomState.players[i].state = PLAYING;
      }

      //se intercambian las manos de los jugadores
      let firstPlayerHand = roomState.players[0].hand;
      for(let i=0; i<3; i++){
        roomState.players[i].hand = roomState.players[(i+1)].hand;
      }
      roomState.players[3].hand = firstPlayerHand;

      roomState.turn++;

      return newState;
    }
    case START_GAME:{
      roomState.state = IN_GAME;
      
      return newState;
    }
    case FINISH_GAME:{
      //TODO
      let parejas;
      let trios;
      for(let i=0; i<4; i++){
        let player = roomState.players[i];
        let table = player.table;
        let score = player.score;
        for(let j=0; j<3; j++){
          parejas = 0;
          trios = 0;
          //las cartas estan ordenadas por turno jugado TODO hacer comprobacion
          for(let k=0; k<length(table); k++){
            if(table[k].roundPlayed==j){
              if(table[k].type==PAREJA){
                parejas++;
              } else if(table[k].type==TRIO){
                trios++;
              }
            }
          }
          score = score + Math.floor(parejas/2)*POINTS.PAREJA;
          score = score + Math.floor(trios/3)*POINTS.TRIO;
        }
      }

      roomState.state = FINISHED;

      return newState;
    }

    // case CREATE_ROOM:{
    //   roomState = newState[action.room] = Object.assign({}, initialRoomState);
    //   newWord = getNewWord();
    //   roomState.target = newWord.target;
    //   roomState.word = newWord.word;
    //   roomState.tries = 5;
    //   roomState.finish = false;
    //   return newState;
    // }
    // case JOIN_ROOM:{
    //   roomState = newState[action.room];
    //   roomState.numberOfPlayers++;
    //   roomState.players[action.playerId] = 'player' + roomState.numberOfPlayers;
      
    //   return newState;
    // }
    default:{
      return state;
    }
  }
}

const cdgApp = combineReducers({
  cdg
});

export default cdgApp;
