/* eslint no-undef: 0 */
const chai = require('chai')
const sinon = require('sinon')

const {
  expect
} = require('chai')
const app = require('../src/app')

describe('api routes', () => {
  it('/:name should return back a .gitignore template', async () => {
    const doc = sinon.mock('IgnoreFile')
    const name = 'test'
    const response = await chai
      .request(app)
      .get(`/${name}`)

    console.log(doc)

    expect(response.status).to.equal(200)
    expect(response.text).to.equal(doc.content)
  })
})
