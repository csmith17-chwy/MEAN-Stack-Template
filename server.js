// *Modules*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// *Configuration*
var db = require('./config/db');

// Set our port
var port = process.env.PORT || 8080;

// Connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// Get all data/stuff of the body (POST) parameters
// Parse application/json
app.use(bodyParser.json());

// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// Set the static files location /client/img will be /img for users
app.use(express.static(__dirname + '/client'));

// *Routes*
require('./app/routes')(app); // configure our routes

// *App Start*
// http://localhost:8080
app.listen(port);
console.log('Connected to port ' + port);
exports = module.exports = app;
