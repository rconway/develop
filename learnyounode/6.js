var filterDirectory = require('./6module.js');
var inputDirectory = process.argv[2];
var inputExtenstion = process.argv[3];

filterDirectory(inputDirectory, inputExtenstion, function(err, list)
{
	list.forEach(function(file)
	{
		console.log(file);
	});	
});
