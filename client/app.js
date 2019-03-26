import React, {Component} from 'react'
import Sidenav from './Sidenav'
import Scenes from './Scenes'

class App extends Component {
  render() {
    return (
      <div id="full">
        <Sidenav />
        <Scenes />
      </div>
    )
  }
}

export default App
