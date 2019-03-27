const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:8080/pandance',
  {
    logging: false
  }
)

module.exports = db
