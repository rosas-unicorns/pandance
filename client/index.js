import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './store'
import {Provider} from 'react-redux'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
