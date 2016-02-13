const express = require("express");

// Single router for '/' - defined in module-global scope
var router = express.Router();

// Middleware to perform some route-specific logging
router.use(function(req, res, next) {
	console.log("route '/' is run");
	next();
});

// Request handler
router.get("/", function(req, res, next) {
	res.send("This is Richard's app: myRest");
});

// Publish the router instance
module.exports = router;
