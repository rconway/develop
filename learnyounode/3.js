var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var bufferStr = buffer.toString();

var parts = bufferStr.split('\n');

console.log(parts.length-1);
