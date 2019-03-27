import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'
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
    modeSelectScreen.height = '300px'
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
    modeSelectScreen.addControl(survivalAbout)

    let survival = this.createButton('survival')
    survival.onPointerUpObservable.add(this.changeMode)
    modeSelectScreen.addControl(survival)

    let timedAbout = new BABYLON.GUI.TextBlock()
    timedAbout.text = 'See how many characters you can type in a minute'
    timedAbout.color = '#dcd5ef'
    timedAbout.fontSize = 13
    timedAbout.height = '20px'
    modeSelectScreen.addControl(timedAbout)

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
    console.log(this.state.mode)
    if (this.state.mode)
      return (
        <DDPGameplay
          mode={this.state.mode}
          changeMode={this.changeMode}
          advancedTexture={this.state.advancedTexture}
          scene={this.props.scene}
        />
      )
    else return null
  }
}
