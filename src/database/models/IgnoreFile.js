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
  },
  created: {
    type: Date,
    default: new Date()
  },
  downloads: {
    type: Number,
    default: 0
  }
})

ignoreFileSchema.index({ name: 1, type: 1 }, { unique: true })

ignoreFileSchema.methods.incrementDownloads = async function () {
  this.downloads++
  await this.save()
}

const IgnoreFile = mongoose.model('IgnoreFile', ignoreFileSchema)
module.exports = IgnoreFile
