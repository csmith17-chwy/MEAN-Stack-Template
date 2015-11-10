var Yeti = require('./models/yeti');

    module.exports = function(app) {

        // *Server Routes*
        // Place API calls here
        // Place Authentication routes here

        // *Test API Route*
        // Uses Mongoose to GET all Yeti (like Jedi or Fungi)from database
        app.get('/api/yeti', function(req, res) {
            Yeti.find(function(err, yeti) {
                // If error
                if (err)
                res.send(err);
                res.json(yeti); // Returns in JSON
            });
        });

        // API's for PUT, POST, DELETE go here

        // *Frontend Routes*
        // Route to handle all AngularJS requests
        var path = require('path');

        app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../client/views/index.html"));
        });

    };
