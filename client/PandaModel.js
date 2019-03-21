import React from 'react'
import {Vector3} from 'babylonjs'
import {Model} from 'react-babylonjs'
import * as Mousetrap from 'mousetrap'
import Pandance from './Pandance'
import SceneBubbles from './SceneBubbles'

export default class Panda extends React.Component {
  constructor(props) {
    super(props)

    this.animation = this.animation.bind(this)
  }

  animation(e) {
    const scenes = [<Pandance />, <SceneBubbles />]
    const scene = scenes[this.props.scene]
    var skeleton = e.skeletons[0]

    var defaultPose = scene.beginWeightedAnimation(skeleton, 0, 1, 1.0, true)
    var bothArmsUp = scene.beginWeightedAnimation(skeleton, 1, 2, 0, true)
    var leftLegUp = scene.beginWeightedAnimation(skeleton, 4, 5, 0, true)
    var lastAnim = defaultPose

    Mousetrap.bind(
      'q',
      () => {
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

    Mousetrap.bind(
      'w',
      () => {
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
      },
      'keyup'
    )
  }

  render() {
    return (
      <Model
        sceneFilename="panda.babylon"
        rootUrl="/assets/"
        position={new Vector3(0.02, 0, 0)}
        onModelLoaded={this.animation}
      />
    )
  }
}
