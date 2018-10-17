const IgnoreFile = require('./database/models/IgnoreFile')

module.exports = app => {
  app.get('/', async (req, res) => {
    let payload = await IgnoreFile.findOne({ name: 'test' })
    console.log(payload)
    if (payload) {
      res.send(payload)
    } else {
      res.send(await IgnoreFile.create({
        name: 'test',
        content: 'Hello world!'
      }))
    }
  })
}
