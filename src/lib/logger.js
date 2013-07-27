var winston = require('winston')

var opts = {
  json: true,
  colorize: true
}
if (winston.transports.Console) {
  winston.remove(winston.transports.Console)
  winston.add(winston.transports.Console, opts)
}

module.exports = winston
