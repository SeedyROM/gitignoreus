const mongoose = require('mongoose')

const log = require('../dev/log')

module.exports = app => {
  let dbSuffix
  switch (process.env.NODE_ENV) {
    case 'TEST':
    case 'DEV':
    case 'PROD':
      dbSuffix = process.env.NODE_ENV.toLowerCase()
      break
  }

  const dbUri = `mongodb://localhost/gitignoreus-${dbSuffix || 'dev'}`
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
