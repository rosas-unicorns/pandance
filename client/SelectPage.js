import React, {Component} from 'react'
import Pandance from './Pandance'

export default class Selection extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      background: 'space',
      character: 'panda'
    }

    this.selectBackground = this.selectBackground.bind(this)
    this.selectCharacter = this.selectCharacter.bind(this)
    this.readyToPlay = this.readyToPlay.bind(this)
  }

  selectBackground(e) {
    this.setState({
      background: e.target.name
    })
  }

  selectCharacter(e) {
    this.setState({
      character: e.target.name
    })
  }

  readyToPlay() {
    this.setState({
      play: true
    })
  }

  render() {
    const backgrounds = ['space', 'bubbles']
    const characterName = ['panda']
    const scenes = [
      <Pandance
        character={this.state.character}
        background={this.state.background}
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
