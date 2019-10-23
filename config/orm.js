var connection = require("./connection.js");

// Make ORM for SQL commands
var orm = {
	// SQL to get all burgers
	selectAll: function(callback) {
		// Run the SQL
		connection.query("SELECT * FROM burgers;", function(err, res) {
			if (err) {
				throw err;
			};
			// Send back burgers
			callback(res);
		});
	},
	// SQL to add a burger
	insertOne: function(strBurger, callback) {
		// Run the SQL
		connection.query("INSERT INTO burgers ('burger_name', 'devoured') VALUES ('" + strBurger + "', 0)", function(err, res) {
			if (err) {
				throw err;
			};
			// Send back result
			callback(res);
		});
	},
	// SQL to update when we eat a burger
	updateOne: function(strWhere, callback) {
		// Perform the database query
		connection.query("UPDATE burgers SET devoured = '1' WHERE " + strWhere, function(err, res) {
			if (err) {
				throw err;
			};
			// Send back result
			callback(res);
		});
	}
};

// Export orm for other files
module.exports = orm;