import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Sidenav from './Sidenav'
import Scenes from './Scenes'
import Score from './Score'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="full">
          <Route exact path="/scores" component={Score} />
          <Route exact path="/" component={Sidenav} />
          <Route exact path="/" component={Scenes} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
