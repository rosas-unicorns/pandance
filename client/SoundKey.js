import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

var Record = require('mousetrap-record')(require('mousetrap'))

class SoundKey extends Component {
  constructor() {
    super()
    this.state = {
      records: []
    }

    this.recordSequence = this.recordSequence.bind(this)
    this.play = this.play.bind(this)
    // this.simulateKey = this.simulateKey.bind(this)
  }

  componentDidMount() {
    Mousetrap.bind('q', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/bubbles.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('w', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/clay.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('e', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/dotted-spiral.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('y', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/glimmer.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('t', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/moon.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('r', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/moon2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('u', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/pinwheel.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('i', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/pinwheel2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('o', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/pinwheel3.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('p', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/piston-1.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('a', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/piston-2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('s', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/piston-3.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('d', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/prism-1.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('f', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/prism-2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('g', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/splits.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('h', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/squiggle.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('j', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/suspension.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('k', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/timer.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('l', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/wipe.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('z', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/wipe2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('x', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/veil.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('c', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/confetti2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('v', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/flash-3.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('b', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/glimmer2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('n', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/time2.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('m', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/zig-zag.mp3'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('space', () => {
      const audio = document.createElement('audio')
      audio.src = 'assets/music/clap-loop.mp3'
      audio.load()
      audio.play()
    })
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

  play(e, arr = this.state.records) {
    console.log(arr)
    const trigger = () => {
      Mousetrap.trigger(arr[0])
      this.play(e, arr.slice(1))
    }

    if (arr.length > 0) {
      setTimeout(trigger, 800)
    }
  }

  render() {
    return null
  }
}

export default SoundKey
