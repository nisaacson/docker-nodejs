var moment = require('moment')

module.exports = function (server) {
  var start = moment()
  console.log('routes setup')
  server.get('/info', function (req, res) {
    var end = moment()
    var duration = end.diff(start)
    var output = {
      uptime: duration
    }
    res.send(output)
  })
}
