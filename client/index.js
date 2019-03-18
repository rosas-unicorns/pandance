import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import SoundKey from './components'
import store from './store'
import App from './app'

// establishes socket connection
import './socket'

ReactDOM.render(<App />, document.getElementById('app'))
