import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Pandance from './Pandance'
import SceneBubbles from './SceneBubbles'

class App extends Component {
  render() {
    var scene = [<SceneBubbles />, <Pandance />]
    return <div>{scene[1]}</div>
  }
}

// <SoundKey />
export default App
