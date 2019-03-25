import React from 'react'
import {HemisphericLight, PointLight, Vector3, ArcRotateCamera} from 'babylonjs'
import {Engine, Scene} from 'react-babylonjs'
import PandaModel from './PandaModel'
import RobotModel from './RobotModel'
import SoundKey from './SoundKey'

export default class DiscoScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: {}
    }

    this.onSceneMount = this.onSceneMount.bind(this)
    this.initEnvironment = this.initEnvironment.bind(this)
  }

  onSceneMount(e) {
    const {canvas, scene} = e
    this.setState({scene})

    this.initEnvironment(canvas, scene)
    scene.clearColor = BABYLON.Color3.Black()
    scene.getEngine().runRenderLoop(() => {
      if (scene) scene.render()
    })
  }

  initEnvironment(canvas, scene) {
    // LIGHTS
    var light = new BABYLON.HemisphericLight(
      'light1',
      new BABYLON.Vector3(0, 1, 0),
      scene
    )
    light.intensity = 0.8
    light.groundColor = new BABYLON.Color3(0, 0, 0)

    var mainLight = new BABYLON.PointLight(
      'mainLight',
      new BABYLON.Vector3(2, 8, 0),
      scene
    )
    mainLight.intensity = 1

    // Lights
    var light0 = new BABYLON.PointLight(
      'Omni0',
      new BABYLON.Vector3(8, 10, 0),
      scene
    )
    var light1 = new BABYLON.PointLight(
      'Omni1',
      new BABYLON.Vector3(-8, 10, 0),
      scene
    )
    var light2 = new BABYLON.PointLight(
      'Omni2',
      new BABYLON.Vector3(0, 10, 0),
      scene
    )
    var light3 = new BABYLON.DirectionalLight(
      'Dir0',
      new BABYLON.Vector3(1, -2, 0),
      scene
    )
    var light4 = new BABYLON.PointLight(
      'Omni3',
      new BABYLON.Vector3(10, 0, 0),
      scene
    )
    var light5 = new BABYLON.PointLight(
      'Omni4',
      new BABYLON.Vector3(10, 0, 0),
      scene
    )

    var material = new BABYLON.StandardMaterial('kosh', scene)

    // Creating light sphere
    var lightSphere0 = BABYLON.Mesh.CreateSphere('Sphere0', 16, 0.8, scene)
    var lightSphere1 = BABYLON.Mesh.CreateSphere('Sphere1', 16, 0.8, scene)
    var lightSphere2 = BABYLON.Mesh.CreateSphere('Sphere2', 16, 0.8, scene)
    var lightSphere4 = BABYLON.Mesh.CreateSphere('Sphere4', 16, 0.8, scene)
    var lightSphere5 = BABYLON.Mesh.CreateSphere('Sphere5', 16, 0.8, scene)

    lightSphere0.material = new BABYLON.StandardMaterial('red', scene)
    lightSphere0.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    lightSphere0.material.specularColor = new BABYLON.Color3(0, 0, 0)
    lightSphere0.material.emissiveColor = new BABYLON.Color3(1, 0, 0)

    lightSphere1.material = new BABYLON.StandardMaterial('green', scene)
    lightSphere1.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    lightSphere1.material.specularColor = new BABYLON.Color3(0, 0, 0)
    lightSphere1.material.emissiveColor = new BABYLON.Color3(0, 1, 0)

    lightSphere2.material = new BABYLON.StandardMaterial('blue', scene)
    lightSphere2.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    lightSphere2.material.specularColor = new BABYLON.Color3(0, 0, 0)
    lightSphere2.material.emissiveColor = new BABYLON.Color3(0, 0, 1)

    lightSphere4.material = new BABYLON.StandardMaterial('blue', scene)
    lightSphere4.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    lightSphere4.material.specularColor = new BABYLON.Color3(0, 0, 0)
    lightSphere4.material.emissiveColor = new BABYLON.Color3(1, 1, 0)

    lightSphere5.material = new BABYLON.StandardMaterial('blue', scene)
    lightSphere5.material.diffuseColor = new BABYLON.Color3(0, 0, 0)
    lightSphere5.material.specularColor = new BABYLON.Color3(0, 0, 0)
    lightSphere5.material.emissiveColor = new BABYLON.Color3(0, 1, 1)

    light0.diffuse = new BABYLON.Color3(1, 0, 0)
    light0.specular = new BABYLON.Color3(1, 0, 0)

    light1.diffuse = new BABYLON.Color3(0, 1, 0)
    light1.specular = new BABYLON.Color3(0, 1, 0)

    light2.diffuse = new BABYLON.Color3(0, 0, 1)
    light2.specular = new BABYLON.Color3(0, 0, 1)

    light3.diffuse = new BABYLON.Color3(1, 1, 1)
    light3.specular = new BABYLON.Color3(1, 1, 1)

    light4.diffuse = new BABYLON.Color3(1, 1, 0)
    light4.specular = new BABYLON.Color3(1, 1, 0)

    light5.diffuse = new BABYLON.Color3(0, 1, 1)
    light5.specular = new BABYLON.Color3(0, 1, 1)

    // CAMERA
    const cameraArc = new ArcRotateCamera(
      'cameraArc',
      -Math.PI / 2,
      Math.PI / 2,
      10,
      new BABYLON.Vector3(0, 3, 0),
      scene
    )
    cameraArc.lowerRadiusLimit = 10
    cameraArc.upperRadiusLimit = 30
    cameraArc.attachControl(canvas, true)

    // Animations
    var alpha = 0
    scene.beforeRender = function() {
      light0.position = new BABYLON.Vector3(
        10 * Math.sin(alpha),
        5,
        14 * Math.cos(alpha)
      )
      light1.position = new BABYLON.Vector3(
        10 * Math.sin(alpha),
        10,
        -5 * Math.cos(alpha)
      )
      light2.position = new BABYLON.Vector3(
        8 * Math.cos(alpha),
        7,
        13 * Math.sin(alpha)
      )
      light4.position = new BABYLON.Vector3(
        10 * Math.sin(alpha),
        6,
        -13 * Math.cos(alpha)
      )
      light5.position = new BABYLON.Vector3(
        10 * Math.sin(alpha),
        3,
        10 * Math.cos(alpha)
      )

      lightSphere0.position = light0.position
      lightSphere1.position = light1.position
      lightSphere2.position = light2.position
      lightSphere4.position = light4.position
      lightSphere5.position = light5.position

      alpha += 0.02
    }

    // Fountain object
    var fountain = BABYLON.Mesh.CreateBox('foutain', 0.01, scene)

    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture(
      '/assets/flare.png',
      scene
    )

    // Where the particles come from
    particleSystem.emitter = fountain // the starting object, the emitter
    var emitterType = new BABYLON.SphereParticleEmitter()
    emitterType.radius = 15
    emitterType.radiusRange = 0

    particleSystem.particleEmitterType = emitterType

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(1.0, 0.0, 1.0, 1.0)
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.0, 1.0, 1.0)
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.6, 0.0)

    // Size of each particle (random between...
    particleSystem.minSize = 0.1
    particleSystem.maxSize = 0.5

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3
    particleSystem.maxLifeTime = 1.5

    // Emission rate
    particleSystem.emitRate = 1500

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0)

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0
    particleSystem.maxAngularSpeed = Math.PI

    // Speed
    particleSystem.minEmitPower = 1
    particleSystem.maxEmitPower = 1
    particleSystem.updateSpeed = 0.005

    particleSystem.addVelocityGradient(0, 3, 5)
    particleSystem.addVelocityGradient(1.0, -5, -10)

    // Start the particle system
    particleSystem.start()
  }

  render() {
    return (
      <Engine>
        <Scene onSceneMount={this.onSceneMount}>
          <PandaModel scene={this.state.scene} />
          <SoundKey />
        </Scene>
      </Engine>
    )
  }
}

// <RobotModel scene={this.state.scene} />
