const express = require("express");

// Single router for '/time/' - defined in module-global scope
var router = express.Router();

// Middleware to perform some route-specific logging
router.use(function(req, res, next) {
	console.log("route '/time/' is run");
	next();
});

// Request handler
router.get("/", function(req, res, next) {
	res.send("#" + require('cluster').worker.id + ": " + new Date().toISOString());
});

// Publish the router instance
module.exports = router;
