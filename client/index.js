import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import SoundKey from './components'
import store from './store'
import SoundKey from './app'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <SoundKey />
  </Provider>,
  document.getElementById('app')
)
