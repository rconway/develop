const express = require("express");

// Single router for '/time/' - defined in module-global scope
var router = express.Router();

// If we're clustered - get the worker id for debug messages
var workerId = "?";
var worker = require('cluster').worker;
if (worker != undefined) {
	workerId = worker.id;
}

// Middleware to perform some route-specific logging
router.use(function(req, res, next) {
	console.log("route '/time/' is run");
	next();
});

// Request handler
router.get("/", function(req, res, next) {
	res.send("#" + workerId + ": " + new Date().toISOString() + "\n");
});

// Publish the router instance
module.exports = router;
