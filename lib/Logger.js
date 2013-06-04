module.exports = Logger;

function Logger(config) {
  this.debugLevel = config.debugLevel || 'info';
  this.file = config.file || undefined;
  this.consoleLog = config.consoleLog || true;
  this.mySQLLog = config.logMySQL || false;
  this.mySQLConfig = config.mySQLConfig || undefined;
}

Logger.log = function(level, message) {
  console.log(level + ': ' + message);
}