const IgnoreFile = require('./database/models/IgnoreFile')

const documentNotFound = (res, req) => {
  res.status(404).send(`Cannot ${req.method} ${req.path}`)
}

const passMetaData = (res, doc) => {
  res.set('X-GITIGNOREUS-ID', doc._id)
  res.set('X-GITIGNOREUS-TYPE', doc.type)
  res.send(doc.content)
}

module.exports = app => {
  app.get('/:name', async (req, res) => {
    try {
      const file = await IgnoreFile.findOne({
        name: req.params.name,
        type: 'public'
      })

      passMetaData(res, file)
      await file.incrementDownloads()
    } catch {
      documentNotFound(res, req)
    }
  })

  app.get('/:type/:name', async (req, res) => {
    try {
      const file = await IgnoreFile.findOne({
        name: req.params.name,
        type: req.params.type
      })

      passMetaData(res, file)
      await file.incrementDownloads()
    } catch {
      documentNotFound(res, req)
    }
  })

  app.get('/:type/:name/info', async (req, res) => {
    try {
      const info = await IgnoreFile.findOne({
        name: req.params.name,
        type: req.params.type
      })

      // Send back ignore information as JSON
      res.json({
        id: info.id,
        type: info.type,
        name: info.name,
        created: info.created,
        downloads: info.downloads
      })
    } catch {
      documentNotFound(res, req)
    }
  })
}
