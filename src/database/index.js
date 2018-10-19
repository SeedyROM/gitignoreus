const mongoose = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')
const log = require('../dev/log')
const {
  getDatabaseURI
} = require('./helpers')

// Inject plug-ins
mongoose.plugin(findOrCreate)

// Setup exports
module.exports = app => {
  // Construct database URI
  const uri = getDatabaseURI()
  // Remove deprecataion warnings
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  })

  // Handle our database connection events
  const database = mongoose.connection
  database.on('open', () => {
    log.database(`Database connection established...`)
  })
  database.on('error', (err) => {
    log.database(`Database connection failed!`)
    throw err
  })

  // Inject our database instance
  app.database = database
}
