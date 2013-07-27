var should = require('should')
var logger = require('./lib/logger')
var index = require('./index')


var port = process.env['PORT']
if (!port) {
  port = 3000
  logger.warn('PORT env variable not set, using default', {
    port: port
  })
}

var data = {
  port: port
}

index(data, function (err, reply) {
  should.not.exist(err)
  reply.port.should.eql(port, 'finacial server listening on incorrect port')
  logger.info('finacial server online and listening on port', {
    port: reply.port
  })
})
