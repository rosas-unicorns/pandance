import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

class Sound extends Component {
  componentDidMount() {
    Mousetrap.bind('q', () => {
      const audio = document.createElement('audio')
      audio.src = 'http://www.wavlist.com/soundfx/011/duck-baby.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('w', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/arrow_x.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('e', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/blip.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('y', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/bloop_x.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('t', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/blurp_x.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('r', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/boing_x.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('u', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/boing3.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('i', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/bomb_x.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('o', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/boxing_bell.wav'
      audio.load()
      audio.play()
    })
    Mousetrap.bind('p', () => {
      const audio = document.createElement('audio')
      audio.src =
        'http://www.wavsource.com/snds_2018-06-03_5106726768923853/sfx/burp_x.wav'
      audio.load()
      audio.play()
    })
  }

  componentWillUnmount() {
    Mousetrap.unbind('q')
  }

  render() {
    return <h1>Hola</h1>
  }
}

export default Sound
