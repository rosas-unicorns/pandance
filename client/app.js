import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Scene1 from './Scene1'
import SceneBubbles from './SceneBubbles'

class App extends Component {
  render() {
    var scene = [<SceneBubbles />, <Scene1 />]
    return (
      <div>
        <div>{scene[0]}</div>
        <SoundKey />
      </div>
    )
  }
}

export default App
