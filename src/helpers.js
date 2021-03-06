const env = process.env.NODE_ENV
const envTypes = ['test', 'dev', 'prod']

// Import directive regex!
// ^\#?.+!(import).+?(.+) /gm/

const glob = require('glob')
const asyncGlob = (pattern, options) => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, (error, files) => {
      if (error) reject(error)
      else resolve(files)
    })
  })
}

module.exports = {
  env,
  envTypes,
  asyncGlob
}
