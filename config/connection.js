var mysql = require("mysql");

// setup database connection properties
if (process.env.JAWSDB_URL) {
  // Heroku uses JawsDB
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { // otherwise use my PC
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

  // Make the connection to MySQL
  connection.connect(function (err) {
    if (err) {
      console.error("ERROR: MySQL connection error -- " + err.stack + "\n\n");
      return;
    }
    console.log("Burger Bonanza is running" + "\n\n");
  });

  // Export connection for ORM use
  module.exports = connection;