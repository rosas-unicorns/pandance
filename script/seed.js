'use strict'

const {db} = require('../server/db')
const {Score} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const scores = await Promise.all([
    Score.create({name: 'cody', score: 10}),
    Score.create({name: 'tati', score: 20}),
    Score.create({name: 'jain', score: 100}),
    Score.create({name: 'jia', score: 102}),
    Score.create({name: 'alex', score: 130}),
    Score.create({name: 'kate', score: 14}),
    Score.create({name: 'fil', score: 220}),
    Score.create({name: 'jia', score: 100}),
    Score.create({name: 'jia', score: 190}),
    Score.create({name: 'jia', score: 100}),
    Score.create({name: 'jia', score: 302}),
    Score.create({name: 'jia', score: 45}),
    Score.create({name: 'jia', score: 100}),
    Score.create({name: 'jia', score: 100})
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
