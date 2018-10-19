const mongoose = require('mongoose')

const log = require('../dev/log')

module.exports = app => {
  const env = process.env.NODE_ENV
  const envTypes = ['TEST', 'DEV', 'PROD']

  let dbSuffix
  let dbHost
  if (!envTypes.contains(env)) throw new Error('Invalid NODE_ENV')

  switch (env) {
    case 'TEST':
    case 'DEV':
      dbHost = 'localhost/gitignoreus'
      break
    case 'PROD':
      dbHost = '' // TODO: MAKE THIS A REMOTE MONGOCONNECTION
      break
  }

  switch (env) {
    case 'TEST':
    case 'DEV':
    case 'PROD':
      dbSuffix = env.toLowerCase()
      break
  }

  const dbUri = `mongodb://${dbHost}/gitignoreus-${dbSuffix || 'dev'}`
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
