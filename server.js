// require necessary modules, don't forget to npm install them
var express = require ("express");
var methodOverride = require("method-override");

// set up app and PORT
var app = express();
var PORT = process.env.PORT || 8080;

// set up express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

// this makes the devour buttons work, otherwise HTML won't support PUT
app.use(methodOverride('_method'));

// require modules and setup for handlebars
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// set up routes
var routes = require('./controllers/burgers_controller.js');

// start the app on PORT
app.use('/', routes);
app.listen(PORT);