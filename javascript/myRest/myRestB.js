var http = require('http');

var server = http.createServer();

server.on("request", function(request, response) {
  // Error handling
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });

  // Handle the '/echo' route
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  }
  else {
    response.statusCode = 404; // Not found
    response.end();
  }
});

// Start listening
server.listen(3000, function() {
  console.log("myRestB listening on port 3000");
});

