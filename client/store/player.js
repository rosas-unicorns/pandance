import axios from 'axios'

// ACTION TYPES
const GET_SCORE = 'GET_SCORE'
const UPDATE_SCORE = 'UPDATE_SCORE'

// INITIAL STATE
const player = {
  score: 0,
  lives: 3
}

// ACTION CREATORS
export const updateScore = points => ({type: UPDATE_SCORE, points})

// REDUCER
export default function(state = player, action) {
  switch (action.type) {
    case UPDATE_SCORE:
      const score = state.score + action.points
      return {...state, score}
    default:
      return state
  }
}
