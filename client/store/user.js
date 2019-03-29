import axios from 'axios'

// ACTION TYPES
const CHANGE_SCORE = 'CHANGE_SCORE'
const CHANGE_NAME = 'CHANGE_NAME'

// ACTION CREATORS
const changeScore = score => ({type: CHANGE_SCORE, score})
export const changeName = name => ({type: CHANGE_NAME, name})

// INITIAL STATE
const initialState = {
  name: '',
  score: 0
}

// THUNK CREATOR
export const addScore = obj => {
  return async dispatch => {
    try {
      await axios.put('/api/scores', obj)
      dispatch(changeScore(obj.score))
    } catch (err) {
      console.error(err)
    }
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCORE:
      return {...state, score: action.score}
    case CHANGE_NAME:
      return {...state, name: action.name}
    default:
      return state
  }
}
