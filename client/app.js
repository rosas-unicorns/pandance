import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Scene1 from './Scene1'
import SceneBubbles from './SceneBubbles'

class App extends Component {
  render() {
    var scene = [<SceneBubbles />, <Scene1 />]
    console.log(scene)
    return (
      <div>
        <div>{scene[1]}</div>
      </div>
    )
  }
}

// <SoundKey />
export default App
