import reducer from './reducers'
import * as actions from './actions'

import initialState from './data/initialState'
import joinState from './data/joinState' 
import finishGameState from './data/finishGameState' 
import countedGameState from './data/countedGameState' 

describe('testing reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle JOIN_ROOM', () => {
      expect(
        reducer(initialState, { 
            type: actions.JOIN_ROOM, 
            playerId: "HOB-U_SusO4HsaRQAAAA", 
            roomId: "0" 
        })
      ).toEqual(joinState)
    })

    it('should handle FINISH_GAME', () => {
      expect(
        reducer(finishGameState, { 
            type: actions.FINISH_GAME, 
            playerId: "HOB-U_SusO4HsaRQAAAA", 
            roomId: "0" 
        })
      ).toEqual(countedGameState)
    })
    
  })