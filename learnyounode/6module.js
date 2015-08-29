var fs = require('fs');

module.exports = filterDirectory;

function filterDirectory(thepath, ext, callback)
{
	fs.readdir(String(thepath), function(err, list)
	{
		if (err)
		{
			return callback(err);
		}
		var answer = [];
		for (var i = 0; i < list.length; ++i)
		{
			var str = list[i];
			var parts = str.split('.');
			if (parts.length > 1)
			{
				var lastPart = parts[parts.length-1];
				if (lastPart == ext)
				{
					answer.push(str);
				}
			}
		}
		callback(null, answer);
	});
}
