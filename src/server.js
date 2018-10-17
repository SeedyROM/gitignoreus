const app = require('./app')
const http = require('http')

const log = require('./dev/log')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8000

const server = http.createServer(app)
server.listen(port, host, null, () => {
  log.server(`Listening ${host}:${port}...`)
})

module.exports = server
