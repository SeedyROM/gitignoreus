const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('express-async-errors')

const app = express()
require('./router')(app)
require('./database')(app)

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = app
