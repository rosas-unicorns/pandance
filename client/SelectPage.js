import React, {Component} from 'react'
import Pandance from './Pandance'
import DiscoScene from './DiscoScene'

const flare = '/assets/flare.png'
const bubble = '/assets/bubble.png'

export default class Selection extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      background: 'space',
      character: 'panda',
      mode: 'ddp',
      particle: 'flare',
      particleNum: 500
    }

    this.selectBackground = this.selectBackground.bind(this)
    this.selectCharacter = this.selectCharacter.bind(this)
    this.readyToPlay = this.readyToPlay.bind(this)
    this.selectMode = this.selectMode.bind(this)
    this.changeParticle = this.changeParticle.bind(this)
  }

  selectBackground(e) {
    console.log(e.target)
    this.setState({
      background: e.target.name
    })
  }

  selectCharacter(e) {
    this.setState({
      character: e.target.name
    })
  }

  selectMode(e) {
    this.setState({
      mode: e.target.name
    })
  }
                  
  changeParticle = e => {
    this.setState({
      particle: e.target.value
    })
  }

  setParticleNum = e => {
    this.setState({
      particleNum: parseInt(e.target.value)
    })
  }

  readyToPlay() {
    this.setState({
      play: true
    })
  }

  render() {
    const backgrounds = ['space', 'disco']
    const characterName = ['panda']
    const modes = ['ddp', 'zen']
    const particle = this.state.particle === 'flare' ? flare : bubble

    const scenes = [
      <Pandance
        character={this.state.character}
        background={this.state.background}
        mode={this.state.mode}
        particle={particle}
        particleNum={this.state.particleNum}
      />,
      <DiscoScene
        character={this.state.character}
        background={this.state.background}
        mode={this.state.mode}
      />
    ]

    return (
      <div>
        {!this.state.play ? (
          <div className="container">
            <h1>Select A Scene</h1>
            {backgrounds.map((background, idx) => {
              return (
                <button
                  className="button"
                  type="button"
                  key={background}
                  name={background}
                  onClick={this.selectBackground}
                >
                  {background}
                </button>
              )
            })}
            <h1>Select A Character</h1>
            {characterName.map((character, idx) => {
              return (
                <button
                  type="button"
                  className="button"
                  key={character}
                  name={character}
                  onClick={this.selectCharacter}
                >
                  {character}
                </button>
              )
            })}
            <h1>Select A Mode</h1>
            {modes.map((mode, idx) => {
              return (
                <button
                  className="button"
                  type="button"
                  key={mode}
                  name={mode}
                  onClick={this.selectMode}
                >
                  {mode}
                </button>
              )
            })}

            <h1>Set Particle</h1>
            Particle:{' '}
            <select
              className="select-items"
              onChange={e => this.changeParticle(e)}
            >
              <option value="" />
              <option value="flare">Flare</option>
              <option value="bubble">Bubble</option>
            </select>
            Amount of Particle:{' '}
            <select
              className="select-items"
              onChange={e => this.setParticleNum(e)}
            >
              <option className="select-item" value="" />
              <option className="select-item" value="500">
                500
              </option>
              <option className="select-item" value="1000">
                1000
              </option>
              <option className="select-item" value="2000">
                2000
              </option>
              <option className="select-item" value="3000">
                3000
              </option>
              <option className="select-item" value="5000">
                5000
              </option>
              <option className="select-item" value="10000">
                10000
              </option>
            </select>

            <button
              className="btn-play"
              type="button"
              onClick={this.readyToPlay}
            >
              Play
            </button>
          </div>
        ) : (
          <div>{scenes[0]}</div>
        )}
      </div>
    )
  }
}
