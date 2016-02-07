const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
	res.send({
		workerId: require('cluster').worker.id,
		firstName: "Fred",
		surname: "Bob",
		age: 19
	});
});

module.exports = router;
