/*
 * Use modules for each Express.js route.
 */

var express = require('express');
var app = express();

// Define the route handlers, each of which is in their own module...
app.use('/', require("./routes/root"));
app.use('/details', require("./routes/details"));
app.use('/time', require("./routes/time"));

app.listen(3000, function () {
  console.log('myRestD example app listening on port 3000!');
});
