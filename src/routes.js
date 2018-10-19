const {
  getIgnoreFile,
  passMetaData,
  documentNotFound
} = require('./controller')

module.exports = app => {
  app.get('/', (req, res) => {
    res.json({
      'welcome': `Welcome to gitignore.us (gitignoreus). 
                 Shar-lot-te-tay is the finest binch this side of the Mississippi.`
    })
  })

  app.get('/:name', async (req, res) => {
    try {
      const file = await getIgnoreFile(req.params)

      passMetaData(res, file)
      await file.incrementDownloads()
    } catch {
      documentNotFound(res, req)
    }
  })

  app.get('/:type/:name', async (req, res) => {
    try {
      const file = await getIgnoreFile(req.params)

      passMetaData(res, file)
      await file.incrementDownloads()
    } catch {
      documentNotFound(res, req)
    }
  })

  app.get('/:type/:name/info', async (req, res) => {
    try {
      const file = await getIgnoreFile(req.params)

      // Send back file information as JSON
      res.json({
        id: file.id,
        type: file.type,
        name: file.name,
        created: file.created,
        downloads: file.downloads
      })
    } catch {
      documentNotFound(res, req)
    }
  })
}
