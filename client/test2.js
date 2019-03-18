import * as BABYLON from 'babylonjs'
import * as React from 'react'
// import 'babylonjs-loaders'

const Test2 = () => {
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
        new BABYLON.Vector3(0, 2, -15),
        scene
      )
      camera.attachControl(canvas)
      //light environment light (comes from above)
      var light = new BABYLON.HemisphericLight(
        'light1',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )

      //create a sphere
      var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 4, scene)
      sphere.position.y = 1

      engine.runRenderLoop(function() {
        scene.render()
      })
    }) || []
  )
}

export default Test2
