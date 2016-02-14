/*
 * Use a module for the API.
 */

// Get API from module
var myrestapi = require("./myrestapi");
var api = myrestapi.create();

// Start listening
api.listen(3000, function() {
	console.log("myRestE listening on port 3000");
})
