import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  toggleMode,
  toggleBackground,
  toggleCharacter,
  toggleParticles,
  changeName
} from './store'

class Sidenav extends React.Component {
  constructor(props) {
    super(props)

    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const name = e.target.name
    const value = e.target.value

    if (name === 'mode') this.props.toggleMode(value)
    else if (name === 'background') this.props.toggleBackground(value)
    else if (name === 'character') this.props.toggleCharacter(value)
    else if (name === 'particles') this.props.toggleParticles(value)

    document.getElementById('game').focus()
  }

  openNav() {
    document.getElementById('sidenav').style.width = '240px'
  }

  closeNav() {
    document.getElementById('sidenav').style.width = '0'
  }

  render() {
    return (
      <div>
        <div id="sidenav">
          <i className="material-icons" id="closeNav" onClick={this.closeNav}>
            close
          </i>
          <form>
            <input
              type="text"
              name="userName"
              placeholder="player name"
              onChange={e => this.props.changeName(e.target.value)}
            />
          </form>
          <h1>Selection Menu</h1>
          <h3>
            Game Mode <i className="material-icons">info_outline</i>
          </h3>
          <label className="block">
            <input
              type="radio"
              id="mode1"
              name="mode"
              value="zen"
              defaultChecked
              onChange={this.onChange}
            />
            <span>Zen Mode</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="mode2"
              name="mode"
              value="ddp"
              onChange={this.onChange}
            />
            <span>Dance Dance Pandalution</span>
          </label>

          <h3>
            Character <i className="material-icons">info_outline</i>
          </h3>
          <label className="block">
            <input
              type="radio"
              id="char1"
              name="character"
              value="panda"
              defaultChecked
              onChange={this.onChange}
            />
            <span>Panda</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="char2"
              name="character"
              value="robot"
              onChange={this.onChange}
            />
            <span>Robot</span>
          </label>

          <h3>
            Background <i className="material-icons">info_outline</i>
          </h3>
          <label className="block">
            <input
              type="radio"
              id="bg1"
              name="background"
              value="space"
              defaultChecked
              onChange={this.onChange}
            />
            <span>Space</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="bg2"
              name="background"
              value="disco"
              onChange={this.onChange}
            />
            <span>Disco</span>
          </label>

          <h3>
            Particles <i className="material-icons">info_outline</i>
          </h3>
          <label className="block">
            <input
              type="radio"
              id="part1"
              name="particles"
              value="flare"
              defaultChecked
              onChange={this.onChange}
            />
            <span>Flare</span>
          </label>

          <label className="block">
            <input
              type="radio"
              id="part2"
              name="particles"
              value="panda"
              onChange={this.onChange}
            />
            <span>Panda</span>
          </label>

          <h1>About</h1>
          <div className="block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum
            volutpat tellus diam, consequat gravida libero rhoncus ut.
          </div>

          <h3>Top Score</h3>
          <div className="block">
            <Link to="/scores">
              <label htmlFor="/scores" className="top-score-label">
                <span className="top-score">
                  <i className="material-icons">star</i>
                  Top Players
                </span>
              </label>
            </Link>
          </div>
        </div>
        <i className="material-icons" id="openNav" onClick={this.openNav}>
          menu
        </i>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleMode: mode => dispatch(toggleMode(mode)),
    toggleBackground: bg => dispatch(toggleBackground(bg)),
    toggleCharacter: char => dispatch(toggleCharacter(char)),
    toggleParticles: part => dispatch(toggleParticles(part)),
    changeName: name => dispatch(changeName(name))
  }
}

export default connect(null, mapDispatchToProps)(Sidenav)
