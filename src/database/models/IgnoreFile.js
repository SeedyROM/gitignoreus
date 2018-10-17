const mongoose = require('mongoose')

const ignoreFileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true,
    default: 'contrib'
  }
})

const IgnoreFile = mongoose.model('IgnoreFile', ignoreFileSchema)
module.exports = IgnoreFile
