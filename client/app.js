import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Sidenav from './Sidenav'
import Scenes from './Scenes'
import Score from './Score'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={Sidenav} />
          <Route exact path="/" component={Scenes} />
          <Route exact path="/scores" component={Score} />
        </>
      </BrowserRouter>
    )
  }
}

export default App
