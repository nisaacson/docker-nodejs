/**
 * Add funds to a given tab id. This is called after a charge has been completed by Vesta.
 * Funds have been transferred so we store this information in the database
 */

var logger = require('../lib/logger')
var confirmTransactionLib = require('../lib/confirmTransaction')
var rk = require('required-keys')

module.exports = function(client) {
  var confirmTransaction = confirmTransactionLib(client)
  return function (req, res, next) {
  var params = req.params
  logger.info('posting to fund route', {
    params: params
  })
  var err = validateParams(req.params)
  if (err) {
    return next(err)
  }
  confirmTransaction(params, res, next)
}

function validateParams(params) {
  var error
  var keys = ['tabID', 'amount', 'currency', 'transactionID', 'funderEmail', 'recipientEmail']
  var err = rk.truthySync(params, keys)
  if (err) {
    error = new Error('failed to save funding data to database, missing key in parameters')
    error.body = err
    return error
  }
  return null
}
}
