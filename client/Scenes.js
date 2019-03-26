import React from 'react'
import {Engine} from 'react-babylonjs'
import DiscoScene from './DiscoScene'
import Pandance from './Pandance'
import {connect} from 'react-redux'

class Scenes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Engine canvasId="game">
        {(() => {
          switch (this.props.background) {
            case 'space':
              return (
                <Pandance
                  character={this.props.character}
                  background={this.props.background}
                  mode={this.props.mode}
                  particles={this.props.particles}
                />
              )
            case 'disco':
              return (
                <DiscoScene
                  character={this.props.character}
                  background={this.props.background}
                  mode={this.props.mode}
                  particles={this.props.particles}
                />
              )
          }
        })()}
      </Engine>
    )
  }
}

const mapStateToProps = state => {
  return {
    background: state.toggle.background,
    particles: state.toggle.particles,
    character: state.toggle.character,
    mode: state.toggle.mode
  }
}

export default connect(mapStateToProps)(Scenes)
