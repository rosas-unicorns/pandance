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
//
// Score.prototype.getTen = function(  ) {
//   let allScores = Score.findAll({
//     where: {
//       score: score
//     }
//   })
//   let result = allScores.sort(function(a, b){return b-a}).slice(0, 10)
//   return result;
// }

module.exports = Score
