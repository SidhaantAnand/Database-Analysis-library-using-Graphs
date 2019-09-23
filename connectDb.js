const mysql = require('mysql')

// Ideally it should prompt for a password
module.exports.connect = function (credentials) {
  var connection = mysql.createConnection(credentials);
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      module.exports.connection = {}
      throw err
     }
  module.exports.connection = connection
  })
}

/*
{
  host     : 'localhost',
  user     : 'root',
  password : 'ricky1805',
  database : 'test'
  }
*/