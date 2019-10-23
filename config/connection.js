var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
      console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
      return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
  });
  
  // Export connection for ORM use
  module.exports = connection;