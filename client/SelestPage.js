import React, {Component} from 'react'

export default class Selection extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      scene: null,
      character: null
    }

    this.selectScene = this.selectScene.bind(this)
    this.readyToPlay = this.readyToPlay.bind(this)
  }

  selectScene(idx) {
    return () => {
      this.setState({
        scene: idx
      })
    }
  }

  readyToPlay() {
    if (this.state.scene !== null) {
      this.setState({
        play: true
      })
    }
  }

  render() {
    const sceneName = ['Bubble', 'Panda']
    const scenes = this.props.scenes

    return (
      <div>
        {!this.state.play ? (
          <div>
            <h1>Select A Scene To Play!</h1>
            {sceneName.map((scene, idx) => {
              return (
                <div key={scene} onClick={this.selectScene(idx)}>
                  {scene}
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
