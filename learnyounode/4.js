var fs = require('fs');

fs.readFile(process.argv[2], processFile);

function processFile(err, buffer)
{
	var bufferStr = buffer.toString();
	var parts = bufferStr.split('\n');
	console.log(parts.length-1);
}