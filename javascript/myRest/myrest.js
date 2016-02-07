const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	const express = require("express");
	const app = express();

	app.use('/', require("./routes/root"));
	app.use('/details', require("./routes/details"));
	app.use('/time', require("./routes/time"));

	app.listen(3000, function() {
		console.log("myRest listening on port 3000: #" + cluster.worker.id);
	})
}