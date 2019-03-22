import React from 'react'
import {Model} from 'react-babylonjs'
import * as GUI from 'babylonjs-gui'
import * as Mousetrap from 'mousetrap'
var Rec = require('mousetrap-record')(require('mousetrap'))
var canvas

export default class PandaModel extends React.Component {
  constructor(props) {
    super(props)

    this.onModelLoaded = this.onModelLoaded.bind(this)
    this.recordSequence = this.recordSequence.bind(this)
    this.play = this.play.bind(this)
  }

  onModelLoaded(e) {
    const scene = this.props.scene
    const skeleton = e.skeletons[0]
    const panda = e.meshes[0]

    // TEXTURE
    let pandaMat = new BABYLON.StandardMaterial('pandaTexture', scene)
    pandaMat.diffuseTexture = new BABYLON.Texture(
      'textures/panda-colors.png',
      scene
    )
    panda.material = pandaMat

    // PARTICLE
    const particle = () => {
      var particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)

      particleSystem.particleTexture = new BABYLON.Texture(
        '/textures/panda-colors.png',
        scene
      )

      particleSystem.emitter = panda

      particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
      particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
      particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)

      particleSystem.minSize = 0.1
      particleSystem.maxSize = 0.5

      particleSystem.minLifeTime = 0.3
      particleSystem.maxLifeTime = 1.5

      particleSystem.emitRate = 500

      particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE

      particleSystem.gravity = new BABYLON.Vector3(0, 0, 0)

      particleSystem.minAngularSpeed = 0
      particleSystem.maxAngularSpeed = Math.PI

      particleSystem.minEmitPower = 1
      particleSystem.maxEmitPower = 3
      particleSystem.updateSpeed = 0.005

      particleSystem.addVelocityGradient(0, 3, 5)
      particleSystem.addVelocityGradient(1.0, -5, -10)

      particleSystem.start()

      setTimeout(() => particleSystem.stop(), 500)
    }

    // ANIMATION FUNCTION
    const animation = newPose => {
      particle()
      lastAnim.syncWith(newPose)
      newPose.syncWith()

      let obs = scene.onBeforeAnimationsObservable.add(function() {
        lastAnim.weight -= 0.25
        if (lastAnim.weight <= 0) {
          scene.onBeforeAnimationsObservable.remove(obs)
          lastAnim.weight = 0
          newPose.weight = 1.0
          lastAnim = newPose
        } else {
          newPose.weight = 1.0 - lastAnim.weight
        }
      })
    }

    // ALL POSSIBLE POSES
    var pose1 = scene.beginWeightedAnimation(skeleton, 0, 1, 1, true)
    var pose2 = scene.beginWeightedAnimation(skeleton, 1, 2, 0, true)
    var pose3 = scene.beginWeightedAnimation(skeleton, 2, 3, 0, true)
    var pose4 = scene.beginWeightedAnimation(skeleton, 3, 4, 0, true)
    var pose5 = scene.beginWeightedAnimation(skeleton, 4, 5, 0, true)
    var pose6 = scene.beginWeightedAnimation(skeleton, 5, 6, 0, true)
    var pose7 = scene.beginWeightedAnimation(skeleton, 6, 7, 0, true)
    var pose8 = scene.beginWeightedAnimation(skeleton, 7, 8, 0, true)
    var pose9 = scene.beginWeightedAnimation(skeleton, 8, 9, 0, true)
    var pose10 = scene.beginWeightedAnimation(skeleton, 9, 10, 0, true)
    var pose11 = scene.beginWeightedAnimation(skeleton, 10, 11, 0, true)
    var lastAnim = pose1

    // KEY BINDINGS
    Mousetrap.bind('q', () => animation(pose2), 'keyup')
    Mousetrap.bind('w', () => animation(pose3), 'keyup')
    Mousetrap.bind('e', () => animation(pose4), 'keyup')
    Mousetrap.bind('r', () => animation(pose5), 'keyup')
    Mousetrap.bind('t', () => animation(pose6), 'keyup')
    Mousetrap.bind('y', () => animation(pose7), 'keyup')
    Mousetrap.bind('u', () => animation(pose8), 'keyup')
    Mousetrap.bind('i', () => animation(pose9), 'keyup')
    Mousetrap.bind('o', () => animation(pose10), 'keyup')
    Mousetrap.bind('p', () => animation(pose11), 'keyup')

    // BUTTONS
    let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
      'UI'
    )
    let panel = new BABYLON.GUI.StackPanel()
    advancedTexture.addControl(panel)

    let recBtn = BABYLON.GUI.Button.CreateSimpleButton('rec', 'Rec')
    recBtn.width = '150px'
    recBtn.height = '40px'
    recBtn.color = 'white'
    recBtn.onPointerUpObservable.add(this.recordSequence)
    panel.addControl(recBtn)

    let playBtn = BABYLON.GUI.Button.CreateSimpleButton('play', 'Play')
    playBtn.width = '150px'
    playBtn.height = '40px'
    playBtn.color = 'white'
    playBtn.paddingTop = '5px'
    playBtn.onPointerUpObservable.add(this.play)
    panel.addControl(playBtn)
  }

  recordSequence() {
    let newRecords = []
    Rec.record(function(sequence) {
      sequence.forEach(key => newRecords.push(key))
      newRecords = sequence
      console.log('You pressed: ' + sequence.join(' '))
    })

    this.setState({
      records: newRecords
    })
  }

  play(pos, evt, arr = this.state.records) {
    const trigger = () => {
      console.log(arr[0])
      const ok = document.getElementById('app')
      var keyEvent = new KeyboardEvent('keyup', {key: arr[0]})
      console.log(keyEvent)
      ok.dispatchEvent(keyEvent)
      this.play(pos, evt, arr.slice(1))
    }

    if (arr.length > 0) {
      setTimeout(trigger, 800)
    }
  }

  render() {
    return (
      <Model
        sceneFilename="panda.babylon"
        rootUrl="/assets/"
        onModelLoaded={this.onModelLoaded}
      />
    )
  }
}
