export const particle = (props, scene, model, particleNum) => {
  var particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)

  particleSystem.particleTexture = new BABYLON.Texture(props, scene)
  var emitterType = new BABYLON.SphereParticleEmitter()
  emitterType.radius = 30
  emitterType.radiusRange = 0

  particleSystem.particleEmitterType = emitterType

  particleSystem.emitter = model

  particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0)
  particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0)
  particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0)

  particleSystem.minSize = 0.3
  particleSystem.maxSize = 0.9

  particleSystem.minLifeTime = 0.3
  particleSystem.maxLifeTime = 1.5

  particleSystem.emitRate = particleNum

  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE

  particleSystem.gravity = new BABYLON.Vector3(0, 0, 0)

  particleSystem.minAngularSpeed = 0
  particleSystem.maxAngularSpeed = Math.PI

  particleSystem.minEmitPower = 1
  particleSystem.maxEmitPower = 3
  particleSystem.updateSpeed = 0.005

  particleSystem.addVelocityGradient(0, 3, 5)
  particleSystem.addVelocityGradient(1.0, -5, -10)

  particleSystem.start()

  setTimeout(() => particleSystem.stop(), 500)
}

export const particleDisco = (scene, props) => {
  // Fountain object
  var fountain = BABYLON.Mesh.CreateBox('foutain', 0.01, scene)

  // Create a particle system
  var particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)
  
  //Texture of each particle
  particleSystem.particleTexture = new BABYLON.Texture(props, scene)

  // Where the particles come from
  particleSystem.emitter = fountain // the starting object, the emitter
  var emitterType = new BABYLON.SphereParticleEmitter()
  emitterType.radius = 15
  emitterType.radiusRange = 0

  particleSystem.particleEmitterType = emitterType

  // Colors of all particles
  particleSystem.color1 = new BABYLON.Color4(1.0, 0.0, 1.0, 1.0)
  particleSystem.color2 = new BABYLON.Color4(0.2, 0.0, 1.0, 1.0)
  particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.6, 0.0)

  // Size of each particle (random between...
  particleSystem.minSize = 0.1
  particleSystem.maxSize = 0.5

  // Life time of each particle (random between...
  particleSystem.minLifeTime = 0.3
  particleSystem.maxLifeTime = 1.5

  // Emission rate
  particleSystem.emitRate = 1500

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
