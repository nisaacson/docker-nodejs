var request = require('request')
var should = require('should')
var testHelper = require('./testHelper')
var inspect = require('eyespect').inspector()

describe('Info Route', function () {
  it('should get /info route', function (done) {
    var url = testHelper.api('/info')
    var opts = {
      url: url,
      method: 'get',
      json: true
    }
    request(opts, function (err, res, body) {
      should.not.exist(err)
      res.statusCode.should.eql(200)
      should.exist(body.uptime)
      done()
    })
  })

})
