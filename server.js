var express = require ("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// Override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.listen(PORT);