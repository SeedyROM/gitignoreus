const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('express-async-errors')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./routes')(app)
require('./database')(app)
module.exports = app
