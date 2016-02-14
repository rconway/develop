/*
 * Use Express.js to handle routes - simple usage.
 */

var express = require('express');
var app = express();

app.get('/echo', function (request, response) {
  response.send("Hello World!");
});

app.post('/echo', function (request, response) {
  request.pipe(response);
});

app.listen(3000, function () {
  console.log('myRestC example app listening on port 3000!');
});
