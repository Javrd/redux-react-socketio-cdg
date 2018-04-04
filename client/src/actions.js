export const SYNC_STATE = 'SYNC_STATE'
export const SYNC_ROOMS = 'SYNC_ROOMS'
export const WAITING = 'WAITING'
export const PLAYING = 'PLAYING'

export function syncState(state) {
  return { type: SYNC_STATE, state: state }
}

export function syncRooms(avalibleRooms) {
  return { type: SYNC_ROOMS, avalibleRooms: avalibleRooms }
}