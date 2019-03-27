import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'
import Zen from './Zen'
import DDP from './DDP'

export default class SoundKey extends Component {
  componentDidMount() {
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
  }

  render() {
    if (this.props.mode === 'zen') return <Zen />
    else if (this.props.mode === 'ddp')
      return (
        <DDP
          scene={this.props.scene}
          addScore={this.props.addScore}
          name={this.props.name}
        />
      )
  }
}
