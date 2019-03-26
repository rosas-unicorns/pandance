const router = require('express').Router()

router.use('/scores', require('./scores'))

module.exports = router
