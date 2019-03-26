import React from 'react'
import {Model} from 'react-babylonjs'
import * as Mousetrap from 'mousetrap'

export default class PandaModel extends React.Component {
  constructor(props) {
    super(props)

    this.onModelLoaded = this.onModelLoaded.bind(this)
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
        `assets/${this.props.particles}.png`,
        scene
      )
      var emitterType = new BABYLON.SphereParticleEmitter()
      emitterType.radius = 30
      emitterType.radiusRange = 0

      particleSystem.particleEmitterType = emitterType

      particleSystem.emitter = panda

      particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
      particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
      particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)

      particleSystem.minSize = 0.5
      particleSystem.maxSize = 1.2

      particleSystem.minLifeTime = 0.3
      particleSystem.maxLifeTime = 1

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
    var pose12 = scene.beginWeightedAnimation(skeleton, 11, 12, 0, true)
    var pose13 = scene.beginWeightedAnimation(skeleton, 12, 13, 0, true)
    var pose14 = scene.beginWeightedAnimation(skeleton, 13, 14, 0, true)
    var pose15 = scene.beginWeightedAnimation(skeleton, 14, 15, 0, true)
    var pose16 = scene.beginWeightedAnimation(skeleton, 15, 16, 0, true)
    var pose17 = scene.beginWeightedAnimation(skeleton, 16, 17, 0, true)
    var pose18 = scene.beginWeightedAnimation(skeleton, 17, 18, 0, true)
    var pose19 = scene.beginWeightedAnimation(skeleton, 18, 19, 0, true)
    var pose20 = scene.beginWeightedAnimation(skeleton, 19, 20, 0, true)
    var pose21 = scene.beginWeightedAnimation(skeleton, 20, 21, 0, true)
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

    Mousetrap.bind('a', () => animation(pose12), 'keyup')
    Mousetrap.bind('s', () => animation(pose13), 'keyup')
    Mousetrap.bind('d', () => animation(pose14), 'keyup')
    Mousetrap.bind('f', () => animation(pose15), 'keyup')
    Mousetrap.bind('g', () => animation(pose16), 'keyup')
    Mousetrap.bind('h', () => animation(pose17), 'keyup')
    Mousetrap.bind('j', () => animation(pose18), 'keyup')
    Mousetrap.bind('k', () => animation(pose19), 'keyup')
    Mousetrap.bind('l', () => animation(pose20), 'keyup')

    Mousetrap.bind('z', () => animation(pose21), 'keyup')
    Mousetrap.bind('x', () => animation(pose2), 'keyup')
    Mousetrap.bind('c', () => animation(pose3), 'keyup')
    Mousetrap.bind('v', () => animation(pose4), 'keyup')
    Mousetrap.bind('b', () => animation(pose5), 'keyup')
    Mousetrap.bind('n', () => animation(pose6), 'keyup')
    Mousetrap.bind('m', () => animation(pose7), 'keyup')
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
