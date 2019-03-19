import * as BABYLON from 'babylonjs'
import * as React from 'react'

const Test = () => {
  return (
    window.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('main')

      //create a BabylonJS engine object
      var engine = new BABYLON.Engine(canvas, true)

      //create scene
      var scene = new BABYLON.Scene(engine)

      // create camera
      var camera = new BABYLON.FreeCamera(
        'FreeCamera',
        new BABYLON.Vector3(0, 2, -12),
        scene
      )

      //light environment light (comes from above)
      var light1 = new BABYLON.DirectionalLight(
        'light1',
        // new BABYLON.Vector3(1, 0, 5),
        new BABYLON.Vector3(0, -1, 0),
        scene
      )
      var light2 = new BABYLON.HemisphericLight(
        'HemiLight',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )

      light1.intensity = 0.75
      light2.intensity = 0.5

      var groundMaterial = new BABYLON.StandardMaterial('ground', scene)
      groundMaterial.diffuseTexture = new BABYLON.Texture(
        'assets/earth.png',
        scene
      )

      var ground = BABYLON.Mesh.CreateGroundFromHeightMap(
        'ground',
        'assets/earth.jpg',
        150,
        150,
        180,
        0,
        5,
        scene,
        false
      )
      ground.material = groundMaterial

      // skybox
      var skybox = BABYLON.Mesh.CreateBox('skybox', 500, scene)
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
        'assets/skybox',
        scene
      )
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE

      BABYLON.SceneLoader.ImportMesh(
        '',
        '/assets/',
        'panda2.babylon',
        scene,
        function(newMeshes, particleSystems, skeletons) {
          var skeleton = skeletons[0]
          var panda = newMeshes[0]

          panda.position = new BABYLON.Vector3(0, 10, 0)

          // POSES
          var defaultPose = scene.beginWeightedAnimation(
            skeleton,
            0,
            1,
            1.0,
            true
          )
          var bothArmsUp = scene.beginWeightedAnimation(skeleton, 1, 2, 0, true)
          var leftLegUp = scene.beginWeightedAnimation(skeleton, 2, 3, 0, true)

          engine.hideLoadingUI()
        }
      )

      engine.runRenderLoop(function() {
        scene.render()
      })
    }) || []
  )
}

export default Test
