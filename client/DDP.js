import React, {Component} from 'react'
import * as Mousetrap from 'mousetrap'

export default class DDP extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      lives: 3,
      keyOrder: []
    }

    this.play = this.play.bind(this)
  }

  componentDidMount() {
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
      'UI'
    )

    // KEYS TO PRESS CONTAINER
    let panel = new BABYLON.GUI.Rectangle()
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICALALIGNMENT_TOP
    panel.width = '800px'
    panel.height = '60px'
    panel.thickness = 0
    panel.background = '#ffffff4b'
    advancedTexture.addControl(panel)

    let score = new BABYLON.GUI.TextBlock()
    score.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    score.top = '62px'
    score.left = '400px'
    score.text = `Score: ${this.state.score}`
    score.color = '#fff'
    score.fontSize = 24
    advancedTexture.addControl(score)

    let lives = new BABYLON.GUI.TextBlock()
    lives.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
    lives.top = '62px'
    lives.left = '-400px'
    lives.text = `Lives: ${this.state.lives}`
    lives.color = '#fff'
    lives.fontSize = 24
    advancedTexture.addControl(lives)

    this.panel = panel
    this.lives = lives
    this.score = score
    this.advancedTexture = advancedTexture

    this.interval = setInterval(this.play, 1000)
  }

  // GENERATES KEYS IN PANEL
  play() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const chosenLetter = letters[Math.floor(Math.random() * 26)]
    let clicked = false

    this.setState({keyOrder: [...this.state.keyOrder, chosenLetter]})

    let key = new BABYLON.GUI.Button.CreateSimpleButton(
      'key',
      chosenLetter.toUpperCase()
    )
    key.width = '50px'
    key.height = '50px'
    key.cornerRadius = 5
    key.thickness = 3
    key.background = '#fff'
    this.panel.addControl(key)

    let animation = new BABYLON.Animation(
      'animation',
      'left',
      50,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    )
    let keys = []

    keys.push({
      frame: 0,
      value: 425
    })

    keys.push({
      frame: 100,
      value: -400
    })

    // THIS FUNCTION IS DEFAULT WHEN USER PRESSES KEY TOO EARLY OR TOO LATE
    // DECREASES LIFE
    const remove = () => {
      if (!clicked) {
        this.panel.removeControl(key)

        this.lives.text = `Lives: ${this.state.lives}`
        if (this.state.lives <= 0) {
          clearInterval(this.interval)

          let gameOver = new BABYLON.GUI.TextBlock()
          gameOver.text = 'GAME OVER'
          gameOver.color = 'red'
          gameOver.fontSize = 100
          this.advancedTexture.addControl(gameOver)

          this.gameOver = gameOver
        } else {
          this.setState({
            lives: this.state.lives - 1,
            keyOrder: this.state.keyOrder.slice(1)
          })
        }
      }
    }

    animation.setKeys(keys)
    key.animations = []
    key.animations.push(animation)
    this.props.scene.beginAnimation(key, 0, 100, false, 1, remove)

    // IF USER PRESSES CORRECTLY
    Mousetrap.bind(chosenLetter, e => {
      if (e.key === this.state.keyOrder[0] && !clicked) {
        this.panel.removeControl(key)

        clicked = true
        this.setState({
          score: this.state.score + 1,
          keyOrder: this.state.keyOrder.slice(1)
        })
        this.score.text = `Score: ${this.state.score}`
      }
    })
  }

  componentWillUnmount() {
    this.advancedTexture.removeControl(this.panel)
    this.advancedTexture.removeControl(this.score)
    this.advancedTexture.removeControl(this.lives)
    this.advancedTexture.removeControl(this.gameOver)
    clearInterval(this.interval)
  }

  render() {
    return null
  }
}
