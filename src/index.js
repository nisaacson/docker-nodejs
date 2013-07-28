var restify = require('restify')
var routes = require('./routes/index')
var pg = require('pg')

module.exports = function(data, cb) {
  var client
  var port = data.port
  var postgresConnectionString = data.postgresConnectionString

  pg.connect(postgresConnectionString, function(err, client, done) {
    var server = restify.createServer()
    server.use(restify.bodyParser({
      mapParams: true
    }))
    routes(server, client)
    server.listen(port, function() {
      var output = {
        server: server,
        port: port
      }
      cb(null, output)
    })
  })
}
