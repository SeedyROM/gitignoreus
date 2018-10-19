const mongoose = require('mongoose')

const log = require('../dev/log')
const {
  getDatabaseURI
} = require('./helpers')

module.exports = app => {
  const uri = getDatabaseURI()
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  })

  const database = mongoose.connection

  database.on('open', () => {
    log.database(`Database connection established...`)
  })
  database.on('error', () => {
    log.database(`MongoDB connection error:`)
  })

  app.database = database
}
