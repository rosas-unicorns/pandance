import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import App from './app'

// establishes socket connection
import './socket'

ReactDOM.render(<App />, document.getElementById('app'))
