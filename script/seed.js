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
  db.close()
}

seed().catch(err => {
  console.err('no')
  console.err(err)
  db.close()
})
