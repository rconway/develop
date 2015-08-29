var http = require("http");

var urlContent = [];
var completionCounter = 0;

for (var i = 0; i < 3; ++i)
{
	getUrlContent(i);
}

function getUrlContent(index)
{
	http.get(process.argv[index+2], function(response)
	{
		urlContent[index] = "";
		
		response.setEncoding("utf8");
	
		response.on("data", function(data)
		{
			urlContent[index] += data;
		});
	
		response.on("error", console.error);
	
		response.on("end", function(data)
		{
			++completionCounter;
			if (completionCounter === 3)
			{
				urlContent.forEach(function(content)
				{
					console.log(content);
				});
			}
		});
	});
}
