import React, {Component} from 'react'
import SoundKey from './SoundKey'
import Test from './Test'
import Test2 from './Test2'

class App extends Component {
  render() {
    var scene = [<Test2 />, <Test />]
    console.log(scene)
    return <div>{scene[1]}</div>
  }
}

// <SoundKey/>
export default App
