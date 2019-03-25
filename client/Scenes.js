import React from 'react'
import PandaModel from './PandaModel'
import RobotModel from './RobotModel'
import {HemisphericLight, Vector3, ArcRotateCamera} from 'babylonjs'
import {Engine, Scene, GUI} from 'react-babylonjs'
import DiscoScene from './DiscoScene'
import Pandance from './Pandance'

export default class Scenes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Engine>
        <Pandance
          character={this.props.character}
          background={this.props.background}
          mode={this.props.mode}
          particle={this.props.particle}
          particleNum={this.props.particleNum}
        />
      </Engine>
    )
  }
}

// <DiscoScene
// character={this.props.character}
// background={this.props.background}
// mode={this.props.mode}
// particle={this.props.particle}
// particleNum={this.props.particleNum}
// />
