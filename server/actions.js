export const PLAY_CARD = 'PLAY_CARD';
export const CALCULATE_TURN = 'CALCULATE_TURN';
export const START_ROUND = 'START_ROUND';
export const START_GAME = 'START_GAME';
export const FINISH_GAME = 'FINISH_GAME';

export function playCard(cardId, playerId, room) {
  return { type: PLAY_CARD, cardId: cardId, playerId: playerId, room: room }
}

export function calculateTurn(room) {
  return { type: CALCULATE_TURN, room: room }
}

export function startRound(room) {
  return { type: START_ROUND, room: room }
}

export function startGame(room) {
  return { type: START_GAME, room: room }
}

export function finishRound(room) {
  return { type: FINISH_GAME, room: room }
}