const mongoose = require('mongoose')

const ignoreFileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    require: true
  }
})

const IgnoreFile = mongoose.model('IgnoreFile', ignoreFileSchema)
module.exports = IgnoreFile
