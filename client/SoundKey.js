import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

var Record = require('mousetrap-record')(require('mousetrap'))

class SoundKey extends Component {
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
    // AUDIO
    const createAudio = src => {
      const audio = document.createElement('audio')
      audio.src = src
      audio.load()
      audio.play()
    }

    Mousetrap.bind('q', () => createAudio('assets/music/bubbles.mp3'))
    Mousetrap.bind('w', () => createAudio('assets/music/clay.mp3'))
    Mousetrap.bind('e', () => createAudio('assets/music/dotted-spiral.mp3'))
    Mousetrap.bind('r', () => createAudio('assets/music/moon2.mp3'))
    Mousetrap.bind('t', () => createAudio('assets/music/moon.mp3'))
    Mousetrap.bind('y', () => createAudio('assets/music/glimmer.mp3'))
    Mousetrap.bind('u', () => createAudio('assets/music/pinwheel.mp3'))
    Mousetrap.bind('i', () => createAudio('assets/music/pinwheel2.mp3'))
    Mousetrap.bind('o', () => createAudio('assets/music/pinwheel3.mp3'))
    Mousetrap.bind('p', () => createAudio('assets/music/piston-1.mp3'))

    Mousetrap.bind('a', () => createAudio('assets/music/piston-2.mp3'))
    Mousetrap.bind('s', () => createAudio('assets/music/piston-3.mp3'))
    Mousetrap.bind('d', () => createAudio('assets/music/prism-1.mp3'))
    Mousetrap.bind('f', () => createAudio('assets/music/prism-2.mp3'))
    Mousetrap.bind('g', () => createAudio('assets/music/splits.mp3'))
    Mousetrap.bind('h', () => createAudio('assets/music/squiggle.mp3'))
    Mousetrap.bind('j', () => createAudio('assets/music/suspension.mp3'))
    Mousetrap.bind('k', () => createAudio('assets/music/timer.mp3'))
    Mousetrap.bind('l', () => createAudio('assets/music/wipe.mp3'))

    Mousetrap.bind('z', () => createAudio('assets/music/wipe2.mp3'))
    Mousetrap.bind('x', () => createAudio('assets/music/veil.mp3'))
    Mousetrap.bind('c', () => createAudio('assets/music/confetti2.mp3'))
    Mousetrap.bind('v', () => createAudio('assets/music/flash-3.mp3'))
    Mousetrap.bind('b', () => createAudio('assets/music/glimmer2.mp3'))
    Mousetrap.bind('n', () => createAudio('assets/music/time2.mp3'))
    Mousetrap.bind('m', () => createAudio('assets/music/zig-zag.mp3'))

    Mousetrap.bind('space', () => createAudio('assets/music/clap-loop.mp3'))

    // BUTTONS
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

export default SoundKey
