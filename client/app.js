import React, {Component} from 'react'
import Sidenav from './Sidenav'
import Scenes from './Scenes'

class App extends Component {
  render() {
    return (
        <>
          <Sidenav />
          <Scenes />
        </>
    )
  }
}

export default App
