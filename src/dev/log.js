const chalk = require('chalk')
const { serverIcon, databaseIcon } = require('../dev/icons')

// Development log symbols!
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

// Sneaky little funcer.
const buildStyles = (styles) => {
  const funcs = {}

  for (const style in styles) {
    funcs[style] = (..._args) => {
      const s = styles[style]

      let args = [..._args].join(' ')
      args = s.symbol + ' ' + args

      if (process.env.NODE_ENV === 'dev') {
        console.log(s.color(args))
      }
    }
  }

  return funcs
}

// Because fuck you that's why!
module.exports = buildStyles(logStyles)
