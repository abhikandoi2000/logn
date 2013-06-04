var mysql = require('mysql');

module.exports = Logger;

function Logger(config) {
  this.debugLevel = config.debugLevel || 'info';
  this.file = config.file || undefined;
  this.consoleLog = config.consoleLog || true;
  this.mySQLLog = config.logMySQL || false;
  this.mySQLOptions = config.mySQLOptions || undefined;

  if (this.mySQLLog) {
    this.mySQLConnection = mysql.createConnection(this.mySQLOptions);
    this.mySQLConnection.connect(function(err) {
      if(err) {
        //error occured while connecting to the mysql database
        console.log(err);
      }
    });
  }
}

Logger.logToConsole = function(level, message) {
  console.log(level + ': ' + message);
}

Logger.logToMySQL = function(connection, level, message) {
  // log to mysql here
}

Logger.prototype.log = function(msg) {
  if (this.consoleLog) {
    Logger.logToConsole(msg.level, msg.message);
  }

  if (this.mySQLLog) {
    Logger.logToMySQL(this.mySQLConnection, msg.level, msg.message);
  }
}

Logger.prototype.destroy = function() {
  if(this.mySQLConnection) {
    this.mySQLConnection.end(function(err) {
      if(err) {
        //error occured while closing the connection to mysql database
        console.log(err);
      } else {
        //Logger object destroyed
      }
    });
  }
};