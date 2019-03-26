const Sequelize = require('sequelize')
const db = require('./database')

const Score = db.define('score', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
})

module.exports = Score
