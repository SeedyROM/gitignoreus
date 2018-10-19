const mongoose = require('mongoose')

const log = require('../dev/log')
const {
  configureConnection
} = require('./helpers')

module.exports = app => {
  const {
    host,
    suffix
  } = configureConnection()

  const dbUri = `mongodb://${host}/gitignoreus-${suffix || 'dev'}`
  mongoose.connect(dbUri, {
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
