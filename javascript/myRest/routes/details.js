const express = require("express");

// Single router for '/details/' - defined in module-global scope
var router = express.Router();

// Middleware to perform some route-specific logging
router.use(function(req, res, next) {
	console.log("route '/details/' is run");
	next();
});

// Request handler
router.get("/", function(req, res, next) {
	res.send({
		workerId: require('cluster').worker.id,
		firstName: "Fred",
		surname: "Bob",
		age: 19
	});
});

// Publish the router instance
module.exports = router;
