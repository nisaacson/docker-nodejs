var restify = require('restify')
var routes = require('./routes/index')

module.exports = function (data, cb) {
  var port = data.port
  var server = restify.createServer()

  routes(server)
  server.listen(port, function () {
    var output = {
      server: server,
      port: port
    }
    cb(null, output)
  })
}
