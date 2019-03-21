import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Pandance from './Pandance'
import SceneBubbles from './SceneBubbles'
import Selection from './SelestPage'

class App extends Component {
  render() {
    var scene = [<SceneBubbles />, <Pandance />]
    return (
      <div>
        <Selection scenes={scene} />
      </div>
    )
  }
}

// <SoundKey />
export default App
