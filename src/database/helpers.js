const {
  env,
  envTypes
} = require('../helpers')

// Create a valid database URI for the current environment
const getDatabaseURI = () => {
  let host
  let suffix

  // Exclude invalid envs
  if (!envTypes.includes(env)) throw new Error('Invalid NODE_ENV')

  // Switch fallthrough for host
  switch (env) {
    case 'test':
    case 'dev':
      host = 'localhost'
      break
    case 'prod':
      host = '' // TODO: MAKE THIS A REMOTE MONGOCONNECTION
      break
  }

  // Switch fallthrough for database suffix
  switch (env) {
    case 'test':
    case 'dev':
    case 'prod':
      suffix = env.toLowerCase()
      break
  }

  // Build the connection URI
  return `mongodb://${host}/gitignoreus-${suffix || 'dev'}`
}

module.exports = {
  getDatabaseURI
}
