import * as BABYLON from 'babylonjs'
import * as React from 'react'
// import grasses from './assets/grass.jpg'
import 'babylonjs-loaders'
import * as GUI from 'babylonjs-gui'
// import {particle} from './particle'

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

      var box = BABYLON.Mesh.CreateBox('crate', 2, scene)
      box.material = new BABYLON.StandardMaterial('Mat', scene)
      box.position = new BABYLON.Vector3(0, 2, 0)
      box.ellipsoid = new BABYLON.Vector3(1, 1, 1)

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

      var inputMap = {}
      scene.actionManager = new BABYLON.ActionManager(scene)
      scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnKeyDownTrigger,
          function(evt) {
            inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown'
          }
        )
      )
      scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnKeyUpTrigger,
          function(evt) {
            inputMap[evt.sourceEvent.key] = evt.sourceEvent.type === 'keydown'
          }
        )
      )

      scene.onBeforeRenderObservable.add(() => {
        if (inputMap[' ']) {
          const particle = () => {
            // Create a particle system
            var particleSystem = new BABYLON.ParticleSystem(
              'particles',
              2000,
              scene
            )

            //Texture of each particle
            particleSystem.particleTexture = new BABYLON.Texture(
              'assets/earth.png',
              scene
            )

            // Where the particles come from
            particleSystem.emitter = box // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0) // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0) // To...

            // Colors of all particles
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)

            // Size of each particle (random between...
            particleSystem.minSize = 0.1
            particleSystem.maxSize = 0.5

            // Life time of each particle (random between...
            particleSystem.minLifeTime = 0.3
            particleSystem.maxLifeTime = 1.5

            // Emission rate
            particleSystem.emitRate = 30

            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE

            // Set the gravity of all particles
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0)

            // Direction of each particle after it has been emitted
            particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3)
            particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3)

            // Angular speed, in radians
            particleSystem.minAngularSpeed = 0
            particleSystem.maxAngularSpeed = Math.PI

            // Speed
            particleSystem.minEmitPower = 1
            particleSystem.maxEmitPower = 3
            particleSystem.updateSpeed = 0.005

            // Start the particle system
            particleSystem.start()
            setTimeout(() => particleSystem.stop(), 2000)
          }
          particle()
        }
      })

      engine.runRenderLoop(function() {
        scene.render()
      })
    }) || []
  )
}

export default Test
