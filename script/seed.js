'use strict'

const {db} = require('../server/db')
const {Score} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const scores = await Promise.all([
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0}),
    Score.create({name: 'cody', score: 0})
  ])

  console.log(`seeded ${scores.length} scores`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
