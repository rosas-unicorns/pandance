import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Scene1 from './Scene1'
import Test2 from './Test2'

class App extends Component {
  render() {
    var scene = [<Test2 />, <Scene1 />]
    console.log(scene)
    return <div>{scene[1]}</div>
  }
}

// <SoundKey/>
export default App
