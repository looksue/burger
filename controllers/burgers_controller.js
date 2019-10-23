var express = require("express");
var burger = require ("../models/burgers.js");

var app = express();

// Make the different routes for burgers
app.get('/', function(req, res) {
    burger.selectAll(function(data) {
      var objHandlebars = { burgers: data };
      res.render('index', objHandlebars);
    });
  });
  
  app.post('/burgers', function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
      res.redirect('/');
    });
  });
  
  app.put('/burgers/:id', function(req, res) {
    var strWhere = 'id = ' + req.params.id;
    burger.updateOne(strWhere, function(data) {
      res.redirect('/');
    });
  });
  
  // Export routes for server.js to use.
  module.exports = app;