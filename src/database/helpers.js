const {
  env,
  envTypes
} = require('../helpers')

console.log(env)

const configureConnection = () => {
  let host
  let suffix

  if (!envTypes.includes(env)) throw new Error('Invalid NODE_ENV')

  switch (env) {
    case 'test':
    case 'dev':
      host = 'localhost/gitignoreus'
      break
    case 'prod':
      host = '' // TODO: MAKE THIS A REMOTE MONGOCONNECTION
      break
  }

  switch (env) {
    case 'test':
    case 'dev':
    case 'prod':
      suffix = env.toLowerCase()
      break
  }

  return {
    host,
    suffix
  }
}

module.exports = {
  configureConnection
}
