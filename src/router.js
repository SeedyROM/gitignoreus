const IgnoreFile = require('./database/models/IgnoreFile')
const { pick } = require('./helpers')

module.exports = app => {
  app.get('/:name', async (req, res) => {
    const file = await IgnoreFile.findOne({
      name: req.params.name,
      type: 'public'
    })

    res.send(file.content)
  })
  app.get('/info/:type/:name', async (req, res) => {
    const info = await IgnoreFile.findOne({
      name: req.params.name,
      type: req.params.type
    })

    res.json(pick(info, ['type', 'name', 'created']))
  })
}
