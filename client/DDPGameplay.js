import {Component} from 'react'
import * as Mousetrap from 'mousetrap'

export default class DDPGameplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      lives: 3,
      keyOrder: [],
      timeInterval: 1000,
      time: 0,
      countdown: 60
    }

    this.playSurvival = this.playSurvival.bind(this)
    this.playTimed = this.playTimed.bind(this)
  }

  componentDidMount() {
    this.advancedTexture = this.props.advancedTexture

    let gameOverScreen = new BABYLON.GUI.StackPanel()
    gameOverScreen.isVisible = false
    this.advancedTexture.addControl(gameOverScreen)

    let replay = new BABYLON.GUI.Button.CreateSimpleButton('', 'REPLAY')
    replay.width = '150px'
    replay.height = '65px'
    replay.background = '#454251'
    replay.color = '#fff'
    replay.paddingTop = '10px'
    replay.paddingBottom = '10px'
    replay.thickness = 0
    replay.cornerRadius = 5
    replay.pointerEnterAnimation = () => (replay.background = '#54515b')
    replay.pointerOutAnimation = () => (replay.background = '#454251')
    replay.onPointerUpObservable.add(this.props.changeMode)
    gameOverScreen.addControl(replay)

    if (this.props.mode === 'survival') {
      // KEYS TO PRESS CONTAINER
      let panel = new BABYLON.GUI.Rectangle()
      panel.verticalAlignment = BABYLON.GUI.Control.VERTICALALIGNMENT_TOP
      panel.width = '800px'
      panel.height = '60px'
      panel.thickness = 0
      panel.background = '#ffffff4b'
      this.advancedTexture.addControl(panel)

      let time = new BABYLON.GUI.TextBlock()
      time.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      time.top = '62px'
      time.left = '400px'
      time.text = `Time: ${this.state.time}s`
      time.color = '#fff'
      time.fontSize = 24
      this.advancedTexture.addControl(time)

      let lives = new BABYLON.GUI.TextBlock()
      lives.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      lives.top = '62px'
      lives.left = '-400px'
      lives.text = `Lives: ${this.state.lives}`
      lives.color = '#fff'
      lives.fontSize = 24
      this.advancedTexture.addControl(lives)

      let gameOver = new BABYLON.GUI.TextBlock()
      gameOver.text = 'GAME OVER'
      gameOver.color = 'red'
      gameOver.fontSize = 100
      gameOver.height = '100px'
      gameOverScreen.addControl(gameOver)

      this.lives = lives
      this.time = time
      this.panel = panel
      this.interval = setInterval(
        () => this.setState({time: this.state.time + 1}),
        1000
      )
      this.timeout = setTimeout(this.playSurvival, this.state.timeInterval)
    } else if (this.props.mode === 'timed') {
      let panel = new BABYLON.GUI.Rectangle()
      panel.verticalAlignment = BABYLON.GUI.Control.VERTICALALIGNMENT_TOP
      panel.width = '60px'
      panel.top = '10px'
      panel.height = '60px'
      panel.thickness = 0
      panel.background = '#ffffff4b'
      this.advancedTexture.addControl(panel)

      let time = new BABYLON.GUI.TextBlock()
      time.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      time.top = '30px'
      time.left = '-100px'
      time.text = `Time: ${this.state.countdown}s`
      time.color = '#fff'
      time.fontSize = 24
      this.advancedTexture.addControl(time)

      let score = new BABYLON.GUI.TextBlock()
      score.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP
      score.top = '30px'
      score.left = '100px'
      score.text = `Score: ${this.state.score}`
      score.color = '#fff'
      score.fontSize = 24
      this.advancedTexture.addControl(score)

      let timesUp = new BABYLON.GUI.TextBlock()
      timesUp.text = "TIME'S UP"
      timesUp.color = 'red'
      timesUp.fontSize = 100
      timesUp.height = '100px'
      gameOverScreen.addControl(timesUp)

      this.score = score
      this.time = time
      this.panel = panel
      this.playTimed()
      this.interval = setInterval(
        () => this.setState({countdown: this.state.countdown - 1}),
        1000
      )
    }

    this.gameOverScreen = gameOverScreen
  }

  playTimed() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const chosenLetter = letters[Math.floor(Math.random() * 26)]

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

    Mousetrap.bind(chosenLetter, e => {
      this.panel.removeControl(key)
      if (this.state.countdown > 0) this.playTimed()

      this.setState({
        score: this.state.score + 1
      })

      this.score.text = `Score: ${this.state.score}`
    })

    if (this.state.countdown <= 0) {
      clearInterval(this.interval)
      this.gameOverScreen.isVisible = true
    }
  }

  playSurvival() {
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

        if (this.state.lives > 0) {
          this.setState({
            lives: this.state.lives - 1,
            keyOrder: this.state.keyOrder.slice(1)
          })
          this.lives.text = `Lives: ${this.state.lives}`
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
          keyOrder: this.state.keyOrder.slice(1)
        })
      }
    })

    if (this.state.lives <= 0) {
      clearInterval(this.interval)
      this.gameOverScreen.isVisible = true
    } else {
      if (this.state.time % 10 === 0 && this.state.timeInterval > 100) {
        this.setState({timeInterval: timeInterval - 75})
      }
      setTimeout(this.playSurvival, this.state.timeInterval)
    }
  }

  componentWillUpdate() {
    if (this.props.mode === 'survival')
      this.time.text = `Time: ${this.state.time}s`
    else if (this.props.mode === 'timed')
      this.time.text = `Time: ${this.state.countdown}s`
  }

  componentWillUnmount() {
    this.advancedTexture.removeControl(this.panel)
    this.advancedTexture.removeControl(this.time)
    this.advancedTexture.removeControl(this.score)
    if (this.lives) this.advancedTexture.removeControl(this.lives)

    this.gameOverScreen.isVisible = false
    clearInterval(this.interval)
    if (this.timeout) clearTimeout(this.timeout)
  }

  render() {
    return null
  }
}
