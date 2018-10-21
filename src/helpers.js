const fs = require('fs')
const path = require('path')
const env = process.env.NODE_ENV
const envTypes = ['test', 'dev', 'prod']

// FN IMPORTNT
// Import directive regex!
// ^\#?.+!(import).+?(.+) /gm/

const includeDirectivePattern = /^#?.+!(import).+?(.+)/

const glob = require('glob')
const asyncGlob = (pattern, options) =>
  new Promise((resolve, reject) =>
    glob(pattern, options, (error, files) => {
      if (error) reject(error)
      else resolve(files)
    })
  )

const importToString = fileName => {
  fileName = path.resolve(__dirname, 'defaults')
  const contents = fs.readFileSync(`${fileName}.gitignore`)
  console.log(contents)
}

const injectImport = string => {
  string.split('\n').forEach((line, i) => {
    const includeDirective = line.match(includeDirectivePattern)
    if (includeDirective) {
      const directive = includeDirective[1]
      const fileName = includeDirective[2]

      switch (directive) {
        case 'import':
          importToString(fileName)
          break
      }
    }
  })
}

module.exports = {
  env,
  envTypes,
  asyncGlob,
  injectImport,
  includeDirectivePattern
}
