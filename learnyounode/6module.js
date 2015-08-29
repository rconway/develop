var fs = require('fs');
var path = require('path');

module.exports = filterDirectory;

function filterDirectory(thepath, ext, callback)
{
	fs.readdir(String(thepath), function(err, list)
	{
		if (err)
		{
			return callback(err);
		}
		
		// Approach using list filter.
		list = list.filter(function(file)
		{
			return path.extname(file) === "." + ext;
		});
		callback(null, list);

		/*
		 * Alternative approach using another array.
		 *
		var answer = [];
		list.forEach(function(file)
		{
			if (path.extname(file) === "." + ext)
			{
				answer.push(file);
			}			
		});	
		callback(null, answer);
		 */
	});
}
