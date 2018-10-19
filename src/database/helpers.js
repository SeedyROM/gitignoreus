const {
  env,
  envTypes
} = require('../helpers')

const getDatabaseURI = () => {
  let host
  let suffix

  if (!envTypes.includes(env)) throw new Error('Invalid NODE_ENV')

  switch (env) {
    case 'test':
    case 'dev':
      host = 'localhost'
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

  return `mongodb://${host}/gitignoreus-${suffix || 'dev'}`
}

module.exports = {
  getDatabaseURI
}
