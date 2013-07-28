var request = require('request')
var should = require('should')
var uuid = require('uuid')
var testHelper = require('./testHelper')
var inspect = require('eyespect').inspector()

describe('Fund Route', function () {
  it('should fund tab correctly when posting to  /fund route', function (done) {
    var url = testHelper.api('/fund')
    var opts = {
      url: url,
      method: 'post',
      json: true,
      form: {
        tabID: uuid.v4(),
        transactionID: uuid.v4(),
        funderEmail: 'foo@example.com',
        recipientEmail: 'bar@example.com',
        amount: '50.00',
        currency: 'USD'
      }
    }
    request(opts, function (err, res, body) {
      should.not.exist(err)
      inspect(body, 'fund body')
      res.statusCode.should.eql(201)
      done()
    })
  })

})
