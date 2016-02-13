const express = require("express");

// Function to create a new API instance
function create() {
	const app = express();

	// Define the route handlers
	app.use('/', require("./routes/root"));
	app.use('/details', require("./routes/details"));
	app.use('/time', require("./routes/time"));

	return app;
}

// Publish the API as a module
module.exports = {
	create: create
}
