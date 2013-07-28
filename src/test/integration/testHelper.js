var portfinder = require('portfinder')
var should = require('should')
var index = require('../../index')
var inspect = require('eyespect').inspector()

var port

before(function(done) {
  portfinder.getPort(function (err, reply) {
    should.not.exist(err)
    should.exist(reply)
    port = reply
    var data = {
      port: port
    }
    index(data, function (err, reply) {
      should.not.exist(err)
      should.exist(reply)
      reply.port.should.eql(port)
      done()
    })
  })
})


module.exports = {
  getPort: function() {
    return port
  },
  api: function(route) {
    return 'http://localhost:' + port + route
  }
}
