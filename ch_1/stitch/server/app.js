// First, we require Express.js as dependency
var express = require('express');

// a helper to resolve relative paths
var path = require('path');

// Then, we initialize the application...
var app = express();


// We add a basic route that serves an index.html
// ... let's use the same as above
app.get('/', function(req, res) {
    console.log("--> /");
    var html = path.resolve(__dirname + '/../index.html');
    res.sendfile(html);
});

// Let's listen on port 5000
app.listen(5000);
console.log("Server is running.");
