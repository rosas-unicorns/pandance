import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

var Record = require('mousetrap-record')(require('mousetrap'))
var Pause = require('mousetrap-pause')(require('mousetrap'))

class SoundKey extends Component {
  constructor() {
    super()
    this.state = {
      records: [],
      currentRecords: []
    }

    this.recordSequence = this.recordSequence.bind(this)
    this.play = this.play.bind(this)
    // this.simulateKey = this.simulateKey.bind(this)
  }

  componentDidMount() {
    Mousetrap.bind('q', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('w', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/026/cymbal1.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('e', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/015/dino-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('y', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('t', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('r', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('u', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('i', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('o', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('p', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
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
      // Record.pause();
    })
    this.setState({
      records: newRecords
    })
  }

  play() {
    // const play2 = (arr) => {
    //   console.log(arr)
    //   const trigger =()=>{
    //     Mousetrap.trigger(arr[0])
    //     play2(arr.slice(1))
    //   }
    //
    //   if(arr.length > 0) {
    //     setTimeout(trigger, 1000)
    //   }
    // }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.recordSequence}>
          Record
        </button>
        <button type="button" onClick={this.play}>
          Play
        </button>
      </div>
    )
  }
}

export default SoundKey
