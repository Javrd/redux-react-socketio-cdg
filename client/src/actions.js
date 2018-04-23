export const SYNC_STATE = 'SYNC_STATE';
export const SYNC_ROOMS = 'SYNC_ROOMS';

export function syncState(state) {
  return { type: SYNC_STATE, state: state };
}

export function syncRooms(rooms) {
  return { type: SYNC_ROOMS, rooms: rooms };
}