import React, {Component} from 'react'
import DDPGameplay from './DDPGameplay'

export default class DDP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: '',
      advancedTexture: null
    }

    this.createButton = this.createButton.bind(this)
    this.changeMode = this.changeMode.bind(this)
  }

  componentDidMount() {
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
      'UI'
    )

    // GAME MODE SELECTION SCREEN
    let modeSelectScreen = new BABYLON.GUI.StackPanel()
    modeSelectScreen.background = '#666270'
    modeSelectScreen.width = '450px'
    modeSelectScreen.height = '310px'
    advancedTexture.addControl(modeSelectScreen)

    let modeSelect = new BABYLON.GUI.TextBlock()
    modeSelect.text = 'SELECT MODE'
    modeSelect.color = '#fff'
    modeSelect.fontSize = 50
    modeSelect.height = '95px'
    modeSelect.paddingTop = '30px'
    modeSelect.paddingTop = '15px'
    modeSelectScreen.addControl(modeSelect)

    let survivalAbout = new BABYLON.GUI.TextBlock()
    survivalAbout.text =
      'See how long you can last as you type the letters flying by'
    survivalAbout.color = '#dcd5ef'
    survivalAbout.fontSize = 13
    survivalAbout.height = '20px'
    survivalAbout.fontWeight = 'bold'
    modeSelectScreen.addControl(survivalAbout)

    let survival = this.createButton('survival')
    survival.onPointerUpObservable.add(this.changeMode)
    modeSelectScreen.addControl(survival)

    let timedAbout = new BABYLON.GUI.TextBlock()
    timedAbout.text = 'See how many characters you can type in a minute'
    timedAbout.color = '#dcd5ef'
    timedAbout.fontSize = 13
    timedAbout.height = '20px'
    timedAbout.fontWeight = 'bold'
    modeSelectScreen.addControl(timedAbout)

    let warning = new BABYLON.GUI.TextBlock()
    warning.text = 'You must submit your name in the sidebar'
    warning.color = 'yellow'
    warning.fontSize = 13
    warning.width = '400px'
    warning.height = '15px'
    warning.fontWeight = 'bold'
    modeSelectScreen.addControl(warning)

    let warning2 = new BABYLON.GUI.TextBlock()
    warning2.text = 'to get in the high score table'
    warning2.color = 'yellow'
    warning2.fontSize = 13
    warning2.width = '400px'
    warning2.height = '20px'
    warning2.fontWeight = 'bold'
    modeSelectScreen.addControl(warning2)

    let timed = this.createButton('timed')
    timed.onPointerUpObservable.add(this.changeMode)
    modeSelectScreen.addControl(timed)

    this.advancedTexture = advancedTexture
    this.modeSelectScreen = modeSelectScreen

    this.setState({advancedTexture})
  }

  createButton(text, bg = '#454251', bgIn = '#54515b') {
    let button = new BABYLON.GUI.Button.CreateSimpleButton(
      text,
      text.toUpperCase()
    )
    button.width = '150px'
    button.height = '65px'
    button.background = bg
    button.color = '#fff'
    button.paddingTop = '10px'
    button.paddingBottom = '10px'
    button.thickness = 0
    button.cornerRadius = 5
    button.pointerEnterAnimation = () => (button.background = bgIn)
    button.pointerOutAnimation = () => (button.background = bg)

    return button
  }

  changeMode(pos, e) {
    this.setState({mode: e.target.name})
    if (this.state.mode) {
      document.getElementById('sidenav').style.width = '0'
    }
  }

  componentDidUpdate() {
    if (!this.state.mode) {
      this.modeSelectScreen.isVisible = true
    } else {
      this.modeSelectScreen.isVisible = false
    }
  }

  componentWillUnmount() {
    this.modeSelectScreen.isVisible = false
  }

  render() {
    if (this.state.mode)
      return (
        <DDPGameplay
          mode={this.state.mode}
          changeMode={this.changeMode}
          advancedTexture={this.state.advancedTexture}
          scene={this.props.scene}
          addScore={this.props.addScore}
          name={this.props.name}
        />
      )
    else return null
  }
}
