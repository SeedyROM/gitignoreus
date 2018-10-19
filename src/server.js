const app = require('./app')
const http = require('http')

const log = require('./dev/log')

const host = (process.env.NODE_ENV === 'prod') ? '0.0.0.0' : 'localhost'
const port = process.env.PORT || 8000

const server = http.createServer(app)
server.listen(port, host, null, () => {
  log.server(`Listening ${host}:${port}...`)
})

module.exports = server
