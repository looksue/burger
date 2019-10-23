var orm = require("../config/orm.js");

// Make burger functions
var burger = {
    // Select all burgers
    selectAll: function(callback) {
      orm.selectAll(function(res) {
        callback(res);
      });
    },
    // Add a burger
    insertOne: function(strBurger, callback) {
      orm.insertOne(strBurger, function(res) {
        callback(res);
      });
    },
    // Update a burger as devoured
    updateOne: function(strWhere, callback) {
      orm.updateOne(strWhere, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions
  module.exports = burger;