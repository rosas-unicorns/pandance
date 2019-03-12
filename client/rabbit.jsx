import * as React from 'react'
import * as BABYLON from 'babylonjs'
import BabylonScene from './babylon' // import the component above linking to file we just created.
import * as BABYLON_LOADER from 'babylonjs-loaders'

export default class PageWithScene extends React.Component<{}, {}> {
  onSceneMount = (e: SceneEventArgs) => {
    const {canvas, scene, engine} = e

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.ArcRotateCamera(
      'Camera',
      0,
      0,
      10,
      new BABYLON.Vector3(0, 0, 0),
      scene
    )
    // This targets the camera to scene origin
    camera.setPosition(new BABYLON.Vector3(10, 0, 10))

    camera.attachControl(canvas, true)

    var light = new BABYLON.HemisphericLight(
      'hemiLight',
      new BABYLON.Vector3(-1, 1, 0),
      scene
    )
    light.diffuse = new BABYLON.Color3(1, 0, 0)
    light.specular = new BABYLON.Color3(0, 1, 0)
    light.groundColor = new BABYLON.Color3(0, 1, 0)

    var rabbit = BABYLON.SceneLoader.ImportMesh(
      '',
      'scene/',
      'Rabbit.babylon',
      scene,
      function(newMeshes) {
        newMeshes.forEach(function(mesh) {
          mesh.position.x = 4
        })
      }
    )

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render()
      }
    })
  }

  render() {
    return (
      <div>
        <BabylonScene onSceneMount={this.onSceneMount} />
      </div>
    )
  }
}
