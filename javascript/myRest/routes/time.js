const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
	res.send("#" + require('cluster').worker.id + ": " + new Date().toISOString());
});

module.exports = router;
