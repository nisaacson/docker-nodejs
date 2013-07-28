var logger = require('./logger')

module.exports = function(client) {
  return function(data, cb) {
    var transactionID = data.transactionID
    var funderEmail = data.funderEmail
    var recipientEmail = data.recipientEmail
    var amount = data.amount
    var currency = data.currency
    var sql = 'INSERT into funds (transactionID, funderEmail, recipientEmail, amount, currency) VALUES $1, $2, $3, $4, $5'
    logger.info('inserting funds into database', {
      sql: sql
    })
    client.query(sql, [transactionID, funderEmail, recipientEmail, amount, currency], function(err) {
      if (err) {
        logger.error('failed to confirm transaction', {
          error: err,
          data: data
        })
        cb(err)
      }
      cb()
    })
  }
}
