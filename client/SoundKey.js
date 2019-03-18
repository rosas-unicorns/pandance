import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

class SoundKey extends Component {
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

  componentWillUnmount() {
    Mousetrap.unbind('q')
  }

  render() {
    return <div />
  }
}

export default SoundKey
