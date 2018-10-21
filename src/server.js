const app = require('./app')
const http = require('http')

const log = require('./dev/log')

const path = require('path')
const fs = require('fs')
const {
  asyncGlob,
  injectImport
} = require('./helpers')

// Check default ignores
asyncGlob('./defaults/**/*.gitignore')
  .then((files) =>
    files.forEach((location, i) => {
      const filePath = path.resolve(__dirname, '../', location)
      const data = fs.readFileSync(filePath, 'utf8')
      injectImport(data)
    })
  )

const host = (process.env.NODE_ENV === 'prod') ? '0.0.0.0' : 'localhost'
const port = process.env.PORT || 8000

const server = http.createServer(app)
server.listen(port, host, null, () =>
  log.server(`Listening ${host}:${port}...`)
)

module.exports = server
