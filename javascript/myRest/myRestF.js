/*
 * Introduce clustering.
 */

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

// Use clustering
if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Get API from module
	var myrestapi = require("./myrestapi");
	var api = myrestapi.create();

	// Start listening
	api.listen(3000, function() {
		console.log("myRest listening on port 3000: #" + cluster.worker.id);
	})
}
