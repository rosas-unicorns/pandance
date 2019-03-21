import React, {Component} from 'react'
import Pandance from './Pandance'
import SceneBubbles from './SceneBubbles'

export default class Selection extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      scene: null,
      character: null
    }

    this.selectScene = this.selectScene.bind(this)
    this.selectCharacter = this.selectCharacter.bind(this)
    this.readyToPlay = this.readyToPlay.bind(this)
  }

  selectScene(idx) {
    return () => {
      this.setState({
        scene: idx
      })
    }
  }

  selectCharacter(idx) {
    return () => {
      this.setState({
        character: idx
      })
    }
  }

  readyToPlay() {
    if (this.state.scene !== null && this.state.character !== null) {
      this.setState({
        play: true
      })
    }
  }

  render() {
    const sceneName = ['Bubble', 'Panda']
    const characterName = ['Panda']
    const scenes = [
      <SceneBubbles character={this.state.character} />,
      <Pandance character={this.state.character} />
    ]

    return (
      <div>
        {!this.state.play ? (
          <div>
            <h1>Select A Scene</h1>
            {sceneName.map((scene, idx) => {
              return (
                <div key={scene} onClick={this.selectScene(idx)}>
                  {scene}
                </div>
              )
            })}
            <h1>Select A Character</h1>
            {characterName.map((character, idx) => {
              return (
                <div key={character} onClick={this.selectCharacter(idx)}>
                  {character}
                </div>
              )
            })}
            <button type="button" onClick={this.readyToPlay}>
              Play
            </button>
          </div>
        ) : (
          <div>{scenes[this.state.scene]}</div>
        )}
      </div>
    )
  }
}
