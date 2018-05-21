export const SYNC_STATE = 'SYNC_STATE';
export const SYNC_ROOMS = 'SYNC_ROOMS';
export const DECREMENTA_TIMER = 'DECREMENTA_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

export function syncState(state) {
  return { type: SYNC_STATE, state: state };
}

export function syncRooms(rooms) {
  return { type: SYNC_ROOMS, rooms: rooms };
}

export function decrementaTimer(state) {
  return { type: DECREMENTA_TIMER, state: state};
}

export function resetTimer(state) {
  return { type: RESET_TIMER, state: state};
}