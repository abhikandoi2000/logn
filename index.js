var mysql = require('mysql');

var Logger = require('./lib/Logger');

exports.createLogger = function(config) {
  return new Logger(config);
}