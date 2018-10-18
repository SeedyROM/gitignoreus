const IgnoreFile = require('./database/models/IgnoreFile')

const getIgnoreFile = async params => {
  return IgnoreFile.findOne({
    name: params.name,
    type: params.type || 'public'
  })
}

const documentNotFound = (res, req) => {
  res.status(404).send(`Cannot ${req.method} ${req.path}`)
}

const passMetaData = (res, doc) => {
  res.set('X-GITIGNOREUS-ID', doc._id)
  res.set('X-GITIGNOREUS-TYPE', doc.type)
  res.send(doc.content)
}

module.exports = {
  getIgnoreFile,
  documentNotFound,
  passMetaData
}
