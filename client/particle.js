// import * as BABYLON from 'babylonjs'
// import React, {Component} from 'react'

// class Particle extends Component {
//   componentDidMount() {
//     particle = () => {
//       // Create a particle system
//       var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

//       //Texture of each particle
//       particleSystem.particleTexture = new BABYLON.Texture("assets/earth.png", scene);

//       // Where the particles come from
//       particleSystem.emitter = box; // the starting object, the emitter
//       particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
//       particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...

//       // Colors of all particles
//       particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
//       particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
//       particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

//       // Size of each particle (random between...
//       particleSystem.minSize = 0.1;
//       particleSystem.maxSize = 0.5;

//       // Life time of each particle (random between...
//       particleSystem.minLifeTime = 0.3;
//       particleSystem.maxLifeTime = 1.5;

//       // Emission rate
//       particleSystem.emitRate = 30;

//       // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
//       particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

//       // Set the gravity of all particles
//       particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

//       // Direction of each particle after it has been emitted
//       particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
//       particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);

//       // Angular speed, in radians
//       particleSystem.minAngularSpeed = 0;
//       particleSystem.maxAngularSpeed = Math.PI;

//       // Speed
//       particleSystem.minEmitPower = 1;
//       particleSystem.maxEmitPower = 3;
//       particleSystem.updateSpeed = 0.005;

//       // Start the particle system
//       particleSystem.start();
//       setTimeout(() => particleSystem.stop(), 2000);
//       console.log('hi', particleSystem);
//       }
//       particle();
//     }
//   }

//   render() {
//     return <div />
//   }
// }

// export default Particle
