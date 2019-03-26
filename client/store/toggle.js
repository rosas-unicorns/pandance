// ACTION TYPES
const TOGGLE_MODE = 'TOGGLE_MODE'
const TOGGLE_BACKGROUND = 'TOGGLE_BACKGROUND'
const TOGGLE_CHARACTER = 'TOGGLE_CHARACTER'
const TOGGLE_PARTICLES = 'TOGGLE_PARTICLES'

// INITIAL STATE
const initialState = {
  mode: 'zen',
  background: 'space',
  character: 'panda',
  particles: 'flare'
}

// ACTION CREATORS
export const toggleMode = mode => ({type: TOGGLE_MODE, mode})
export const toggleBackground = bg => ({type: TOGGLE_BACKGROUND, bg})
export const toggleCharacter = char => ({type: TOGGLE_CHARACTER, char})
export const toggleParticles = part => ({type: TOGGLE_PARTICLES, part})

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODE:
      return {...state, mode: action.mode}
    case TOGGLE_BACKGROUND:
      return {...state, background: action.bg}
    case TOGGLE_CHARACTER:
      return {...state, character: action.char}
    case TOGGLE_PARTICLES:
      return {...state, particles: action.part}
    default:
      return state
  }
}
