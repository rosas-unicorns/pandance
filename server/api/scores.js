const router = require('express').Router()
const Score = require('./../db/score')

router.get('/', async (req, res, next) => {
  try {
    const scores = await Score.findAll({
      order: [['score', 'DESC']]
    })
    res.json(scores)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const score = await Score.create()
    res.json(score)
  } catch (err) {
    next(err)
  }
})

module.exports = router
