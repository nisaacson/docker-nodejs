var moment = require('moment')
var fund = require('./fund')

module.exports = function (server, client) {
  var start = moment()
  console.log('routes setup')
  server.post('/fund', fund(client))
  server.get('/info', function (req, res) {
    var end = moment()
    var duration = end.diff(start)
    var output = {
      uptime: duration
    }
    res.send(output)
  })
}
