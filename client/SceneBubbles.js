import * as BABYLON from 'babylonjs'
import * as React from 'react'
// import 'babylonjs-loaders'

const SceneBubbles = () => {
  return (
    window.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('main')
      //create a BabylonJS engine object
      var engine = new BABYLON.Engine(canvas, true)

      var scene = new BABYLON.Scene(engine)

      // Setup environment
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

      light1.intensity = 0.1
      light2.intensity = 2.0

      var camera = new BABYLON.ArcRotateCamera(
        'ArcRotateCamera',
        1,
        0.8,
        20,
        new BABYLON.Vector3(0, 0, 0),
        scene
      )
      camera.lowerRadiusLimit = 10
      camera.upperRadiusLimit = 40
      camera.attachControl(canvas, true)

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

            // Fountain object
            var fountain = BABYLON.Mesh.CreateBox('foutain', 0.01, scene)

            //Texture of each particle
            particleSystem.particleTexture = new BABYLON.Texture(
              '/assets/flare.png',
              scene
            )

            // Where the particles come from
            particleSystem.emitter = fountain // the starting object, the emitter
            var emitterType = new BABYLON.SphereParticleEmitter()
            emitterType.radius = 30
            emitterType.radiusRange = 0

            particleSystem.particleEmitterType = emitterType

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
            particleSystem.emitRate = 3500

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
          particle()
        }
      })

      BABYLON.SceneLoader.ImportMesh(
        '',
        'assets/',
        'panda2.babylon',
        scene,
        function(newMeshes, particleSystems, skeletons) {
          var skeleton = skeletons[3]
          var panda = newMeshes[1]

          panda.position = new BABYLON.Vector3(4, 4, 4)

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

export default SceneBubbles
