var http = require('http');

var server = http.createServer(function(request, response) {
  // Get details of request if you need it... (not used here)
  var method = request.method;
  var url = request.url;
  var headers = request.headers;
  var userAgent = headers["user-agent"];
  // ...etc. (many others)

  // Simple case: ignore request URL/method/body and just reply
  response.setHeader("Content-Type", "text/html");
  /*
  response.write("First line of response\n");
  response.write("Hello World\n");
  response.end("Last line of response\n");
  */
  require("fs").createReadStream("./myRestA.js").pipe(response);
});

/* Alternatively...
var server = http.createServer();
server.on('request', function(request, response) {
  // Equivalent to passing 'request listener' function to the createServer() call.
});
*/

// Start listening
server.listen(3000, function() {
  console.log("Listening on port 3000");
});

