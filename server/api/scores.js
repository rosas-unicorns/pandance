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

router.put('/', async (req, res, next) => {
  try {
    const userId = req.params.id
    const user = await Score.findById(userId)
  } catch (err) {
    next(err)
  }
})

module.exports = router
