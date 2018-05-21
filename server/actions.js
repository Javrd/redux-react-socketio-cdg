export const PLAY_CARD = 'PLAY_CARD';
export const CALCULATE_TURN = 'CALCULATE_TURN';
export const START_ROUND = 'START_ROUND';
export const START_GAME = 'START_GAME';
export const FINISH_GAME = 'FINISH_GAME';
export const JOIN_ROOM = 'JOIN_ROOM';
export const LEFT_ROOM = 'LEFT_ROOM';
export const CREATE_ROOM = 'CREATE_ROOM';
export const FINISH_TIMER = 'FINISH_TIMER';

export function playCard(cardId, playerId, roomId) {
  return { type: PLAY_CARD, cardId: cardId, playerId: playerId, roomId: roomId };
}

export function calculateTurn(roomId) {
  return { type: CALCULATE_TURN, roomId: roomId };
}

export function startRound(roomId) {
  return { type: START_ROUND, roomId: roomId };
}

export function startGame(roomId) {
  return { type: START_GAME, roomId: roomId };
}

export function finishGame(roomId) {
  return { type: FINISH_GAME, roomId: roomId };
}

export function joinRoom(playerId, roomId) {
  return { type: JOIN_ROOM, playerId: playerId, roomId: roomId };
}

export function leftRoom(playerId, roomId) {
  return { type: LEFT_ROOM, playerId: playerId, roomId: roomId };
}

export function createRoom() {
  return { type: CREATE_ROOM };
}

export function finishTimer(roomId) {
  return { type: FINISH_TIMER, roomId: roomId };
}