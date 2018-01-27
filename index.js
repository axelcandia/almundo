var express = require('express')

var app = express()
app.use(express.static(__dirname + '/public'));
// use whatever templating system(s) you like
app.set('view engine', 'pug')
 

// Load the routes ("controllers" -ish) 
app.use('/api', require('./app/hotel/hotel.server.route'))  

//This is for the frontend
app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
});

// Export the app instance for unit testing via supertest
module.exports = app
