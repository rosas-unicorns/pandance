import * as BABYLON from 'babylonjs'
import * as React from 'react'
// import grasses from './assets/grass.jpg'
import 'babylonjs-loaders'
import * as GUI from 'babylonjs-gui'

const Test = () => {
  return (
    window.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('main')

      //create a BabylonJS engine object
      var engine = new BABYLON.Engine(canvas, true)

      //create scene
      var scene = new BABYLON.Scene(engine)

      //create camera
      var camera = new BABYLON.FreeCamera(
        'FreeCamera',
        new BABYLON.Vector3(0, 2, -12),
        scene
      )
      // camera.attachControl(canvas);

      //light environment light (comes from above)
      var light = new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )

      //create a sphere
      // var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
      // sphere.position.y = 1;

      var ground = BABYLON.Mesh.CreateGround('ground1', 20, 20, 2, scene)

      var grass = new BABYLON.StandardMaterial('grass', scene)
      grass.diffuseTexture = new BABYLON.Texture('/assets/grass.jpg', scene)
      grass.diffuseTexture.uScale = 10
      grass.diffuseTexture.vScale = 10

      ground.material = grass

      // skybox
      var skybox = BABYLON.Mesh.CreateBox('skybox', 1000, scene)
      var skyboxMaterial = new BABYLON.StandardMaterial('skyboxMat', scene)

      // dont render what we cant see
      skyboxMaterial.backFaceCulling = false // not render out of the skybox

      // move with the camera
      skybox.infiniteDistance = true

      skybox.material = skyboxMaterial

      // remove reflection in skybox
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)

      // texture of the 6 sides of the cubes
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        'assets/images/skybox',
        scene
      )
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE

      engine.runRenderLoop(function() {
        scene.render()
      })
    }) || []
  )
}

export default Test
