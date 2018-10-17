const chalk = require('chalk')
const { serverIcon, databaseIcon } = require('../dev/icons')

// Development log symbols
const logStyles = {
  server: {
    color: chalk.blue,
    symbol: serverIcon
  },
  database: {
    color: chalk.gray,
    symbol: databaseIcon
  }
}

// Sleek little func.
const buildStyles = (styles) => {
  const funcs = {}

  for (const style in styles) {
    funcs[style] = (..._args) => {
      const s = styles[style]

      let args = [..._args].join(' ')
      args = s.symbol + ' ' + args

      console.log(s.color(args))
    }
  }

  return funcs
}

module.exports = buildStyles(logStyles)
