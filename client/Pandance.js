import React from 'react'
import {HemisphericLight, Vector3, ArcRotateCamera} from 'babylonjs'
import {Engine, Scene} from 'react-babylonjs'
import PandaModel from './PandaModel'
import RobotModel from './RobotModel'
import SoundKey from './SoundKey'
import DiscoScene from './DiscoScene'

export default class Pandance extends React.Component {
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

    scene.getEngine().runRenderLoop(() => {
      if (scene) scene.render()
    })
  }

  initEnvironment(canvas, scene) {
    // LIGHTS
    let light = new HemisphericLight('hemi', new Vector3(0, 1, 0), scene)
    light.diffuse = new BABYLON.Color3(0.95, 0.95, 1)
    light.groundColor = new BABYLON.Color3(0.34, 0.25, 0.57)
    light.intensity = 0.9
    this.light = light

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

    // OPTION TO PASS DOWN
    if (this.props.background === 'space') {
      var skybox = BABYLON.MeshBuilder.CreateBox(
        'skyBox',
        {size: 1000.0},
        scene
      )
      var skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene)
      skyboxMaterial.backFaceCulling = false
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        'textures/space',
        scene
      )
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
      skybox.material = skyboxMaterial
    } else {
      // scene.clearColor = BABYLON.Color3(0, 0.8, 0)
    }
  }

  render() {
    return (
      <Engine>
        <Scene onSceneMount={this.onSceneMount}>
          <PandaModel
            scene={this.state.scene}
            particle={this.props.particle}
            particleNum={this.props.particleNum}
          />
          <SoundKey />
        </Scene>
      </Engine>
    )
  }
}

// <PandaModel scene={this.state.scene} />
