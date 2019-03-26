import React from 'react'
import {Engine, Scene, GUI} from 'react-babylonjs'
import DiscoScene from './DiscoScene'
import Pandance from './Pandance'
import {SetStateAction} from 'babylonjs'

export default class Scenes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: 'panda'
    }

    this.switchScenes = this.switchScenes.bind(this)
  }

  switchScenes(pos, e) {
    this.setState({scene: e.target.name})
  }

  render() {
    return (
      <Engine>
        {(() => {
          switch (this.state.scene) {
            case 'panda':
              return (
                <Pandance
                  character={this.props.character}
                  background={this.props.background}
                  mode={this.props.mode}
                  particle={this.props.particle}
                  particleNum={this.props.particleNum}
                  switchScenes={this.switchScenes}
                />
              )
            case 'disco':
              return (
                <DiscoScene
                  character={this.props.character}
                  background={this.props.background}
                  mode={this.props.mode}
                  particle={this.props.particle}
                  particleNum={this.props.particleNum}
                  switchScenes={this.switchScenes}
                />
              )
          }
        })()}
      </Engine>
    )
  }
}
