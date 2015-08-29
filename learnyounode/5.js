var fs = require('fs');

fs.readdir(process.argv[2], processDir);

function processDir(err, list)
{
	for (var i = 0; i < list.length; ++i)
	{
		printIfMatchExt(list[i], process.argv[3]);
	}
}

function printIfMatchExt(str, ext)
{
	var parts = str.split('.');
	if (parts.length > 1)
	{
		var lastPart = parts[parts.length-1];
		if (lastPart == ext)
		{
			console.log(str);
		}
	}
}