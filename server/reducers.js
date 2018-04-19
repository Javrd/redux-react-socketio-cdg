import { combineReducers } from 'redux';
import { PLAY_CARD, CALCULATE_TURN, START_ROUND, START_GAME, FINISH_GAME, JOIN_ROOM } from './actions';
import { DECK, POINTS, PAREJA, TRIO, ACUMULATIVO, INCREMENTAL } from './deck';
import {WAITING, PLAYING, LOBBY, IN_GAME, FINISHED} from './utils';

const initialPlayerState = {
  playerId: 0,
  hand:[],
  table:[],
  playedCard: null,
  playerState: PLAYING,
  score: 0
};
const initialRoomState = {
  roomId: '0',
  players: [],
  deck: DECK.slice(),
  state: LOBBY,
  round: 0,
  turn: 0
};
const initialState = {rooms: [Object.assign({}, initialRoomState, {roomId:'001'})]};

function cdg(state = initialState, action) {

  let newState = Object.assign({}, state);
  let roomState;
  for(let i=0; i<newState.rooms.length; i++){
    if(newState.rooms[i].roomId==action.roomId){
      roomState = newState.rooms[i];
      break;
    }
  }

  switch (action.type) {
    case START_ROUND:{
      let deck = roomState.deck;
      let player, randomNumber, hand;
      roomState.round++;
      roomState.turn = 1;

      for(let i=0; i<4; i++){
        player = roomState.players[i];
        player.playerState = PLAYING;
        hand = player.hand;
        for(let j=0; j<8; j++){
          randomNumber = Math.floor(Math.random()*deck.length);
          hand.push(deck[randomNumber]);
          deck.splice(randomNumber,1);
        }
      }
      return newState;
    }
    case PLAY_CARD:{
      if(roomState.state==FINISHED){
        return newState;
      }
      let player;
      for(let i=0; i<4; i++){
        if(roomState.players[i].playerId == action.playerId){
          player = roomState.players[i];
          break;
        }
      }
      if(player.playerState==PLAYING){
        let cheats = true;
        for(let i=0; i<player.hand.length; i++){
          if(player.hand[i].id == action.cardId){
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
        player.playerState = WAITING;
      }
      return newState;
    }
    case CALCULATE_TURN:{
      //cada jugador pasa a tener su playedCard en mesa y cambia su estado
      for(let i=0; i<4; i++){
        roomState.players[i].playedCard.turnPlayed =  roomState.turn;
        roomState.players[i].playedCard.roundPlayed =  roomState.round;
        roomState.players[i].table.push(roomState.players[i].playedCard);
        roomState.players[i].playedCard = null;
        roomState.players[i].playerState = PLAYING;
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
      let acumulativos;
      for(let i=0; i<4; i++){
        let player = roomState.players[i];
        let table = player.table;
        for(let j=1; j<4; j++){
          parejas = 0;
          trios = 0;
          acumulativos = 0;
          //las cartas estan ordenadas por turno jugado TODO hacer comprobacion
          for(let k=0; k<table.length; k++){
            if(table[k].roundPlayed==j){
              if(table[k].type==PAREJA){
                parejas++;
              } else if(table[k].type==TRIO){
                trios++;
              } else if(table[k].type==ACUMULATIVO){
                acumulativos++;
              } else if(table[k].type==INCREMENTAL){
                player.score = player.score + table[k].turnPlayed;
              }
            }
          }
          player.score = player.score + Math.floor(parejas/2)*POINTS.PAREJA;
          player.score = player.score + Math.floor(trios/3)*POINTS.TRIO;
          player.score = player.score + POINTS.ACUMULATIVO[acumulativos];
        }
      }

      roomState.state = FINISHED;

      return newState;
    }

    // case CREATE_ROOM:{
      //ojo cuidao con el object.assign con array dentro
    //   roomState = newState[action.room] = Object.assign({}, initialRoomState);
    //   newWord = getNewWord();
    //   roomState.target = newWord.target;
    //   roomState.word = newWord.word;
    //   roomState.tries = 5;
    //   roomState.finish = false;
    //   return newState;
    // }
    case JOIN_ROOM:{
      let player =Object.assign({}, initialPlayerState);
      player.playerId = action.playerId;
      player.hand = [];
      player.table = [];
      roomState.players.push(player);
      
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
