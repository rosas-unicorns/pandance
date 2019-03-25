import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

var Record = require('mousetrap-record')(require('mousetrap'))

export default class Zen extends Component {
  constructor() {
    super()
    this.state = {
      records: [],
      paused: true
    }

    this.recordSequence = this.recordSequence.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }

  componentDidMount() {
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
      'UI'
    )
    let panel = new BABYLON.GUI.StackPanel()
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAlALIGNMENT_TOP
    advancedTexture.addControl(panel)

    let recBtn = BABYLON.GUI.Button.CreateSimpleButton('rec', 'Rec')
    recBtn.width = '150px'
    recBtn.height = '40px'
    recBtn.color = 'white'
    recBtn.paddingTop = '5px'
    recBtn.onPointerUpObservable.add(this.recordSequence)
    panel.addControl(recBtn)

    let playBtn = BABYLON.GUI.Button.CreateSimpleButton('play', 'Play')
    playBtn.width = '150px'
    playBtn.height = '40px'
    playBtn.color = 'white'
    playBtn.paddingTop = '5px'
    playBtn.onPointerUpObservable.add(this.play)
    panel.addControl(playBtn)

    let pauseBtn = BABYLON.GUI.Button.CreateSimpleButton('pause', 'Pause')
    pauseBtn.width = '150px'
    pauseBtn.height = '40px'
    pauseBtn.color = 'white'
    pauseBtn.paddingTop = '5px'
    pauseBtn.onPointerUpObservable.add(this.pause)
    panel.addControl(pauseBtn)
  }

  recordSequence() {
    var newRecords = []
    Record.record(function(sequence) {
      sequence.forEach(key => newRecords.push(key))
      newRecords = sequence
      console.log('You pressed: ' + sequence.join(' '))
    })
    this.setState({
      records: newRecords
    })
  }

  play(pos, e, arr = this.state.records) {
    if (pos) {
      this.setState({paused: false})
    }
    const trigger = () => {
      console.log(arr[0])
      Mousetrap.trigger(arr[0])
      let newArr = arr.slice(1)
      newArr.push(arr[0])
      this.play(null, null, newArr)
    }

    if (arr.length && !this.state.paused) {
      setTimeout(trigger, 500)
    }
  }

  pause() {
    this.setState({paused: true})
  }

  render() {
    return null
  }
}
