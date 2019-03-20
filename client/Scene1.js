import * as BABYLON from 'babylonjs'
import * as React from 'react'
import * as Mousetrap from 'mousetrap'

const Scene1 = () => {
  return (
    window.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('main')

      //create a BabylonJS engine object
      var engine = new BABYLON.Engine(canvas, true)

      //create scene
      var scene = new BABYLON.Scene(engine)

      // create camera
      var cameraArc = new BABYLON.ArcRotateCamera(
        'cameraArc',
        -Math.PI / 2,
        Math.PI / 2,
        10,
        new BABYLON.Vector3(0, 4, 0),
        scene
      )
      cameraArc.attachControl(canvas, true)

      //light environment light (comes from above)
      var light1 = new BABYLON.DirectionalLight(
        'light1',
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
        'panda.babylon',
        scene,
        function(newMeshes, particleSystems, skeletons) {
          var skeleton = skeletons[0]
          var panda = newMeshes[0]

          // POSES
          var defaultPose = scene.beginWeightedAnimation(
            skeleton,
            0,
            0,
            1.0,
            true
          )
          var bothArmsUp = scene.beginWeightedAnimation(skeleton, 1, 2, 0, true)
          var leftLegUp = scene.beginWeightedAnimation(skeleton, 4, 5, 0, true)
          var lastAnim = defaultPose

          particleSystem.emitter = panda
          particleSystem.minEmitPanda = new BABYLON.Vector3(-1, 0, 0)
          particleSystem.maxEmitPanda = new BABYLON.Vector3(1, 0, 0)

          particleSystem.color1 = new BABYLON.Color4(0, 0, 0, 10)
          // particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
          // particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

          particleSystem.minSize = 0.1
          particleSystem.maxSize = 0.5

          // Life time of each particle (random between...
          particleSystem.minLifeTime = 0.3
          particleSystem.maxLifeTime = 1.5

          // Emission rate
          particleSystem.emitRate = 800

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

          Mousetrap.bind(
            'q',
            () => {
              // Start the particle system
              particleSystem.start()
              setTimeout(() => particleSystem.stop(), 500)

              lastAnim.syncWith(bothArmsUp)
              bothArmsUp.syncWith()
              let obs = scene.onBeforeAnimationsObservable.add(function() {
                lastAnim.weight -= 0.1
                if (lastAnim.weight <= 0) {
                  scene.onBeforeAnimationsObservable.remove(obs)
                  lastAnim.weight = 0
                  bothArmsUp.weight = 1.0

                  lastAnim = bothArmsUp
                } else {
                  bothArmsUp.weight = 1.0 - lastAnim.weight
                }
              })
            },
            'keyup'
          )

          Mousetrap.bind('w', () => {
            lastAnim.syncWith(leftLegUp)
            leftLegUp.syncWith()
            let obs = scene.onBeforeAnimationsObservable.add(function() {
              lastAnim.weight -= 0.1
              if (lastAnim.weight <= 0) {
                scene.onBeforeAnimationsObservable.remove(obs)
                lastAnim.weight = 0
                leftLegUp.weight = 1.0

                lastAnim = leftLegUp
              } else {
                leftLegUp.weight = 1.0 - lastAnim.weight
              }
            })
          }, 'keyup')
        }
      )

      engine.runRenderLoop(function() {
        scene.render()
      })
    }) || []
  )
}

export default Scene1
