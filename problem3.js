/*
3. Create a POST path at `/question3` which accepts **only** PNG or
SVG files in the request, and store them in a temporary folder on your
local machine.
1. Hint: Use an application like Postman to make the request with the image.
*/

var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('started on port 3000');
});
