var http = require("http");

var url = process.argv[2];

http.get(url, function(response)
{
	response.setEncoding("utf8");
	
	var dataContent = "";
	
	response.on("data", function(data)
	{
		dataContent += data;
	});
	
	response.on("error", console.error);
	
	response.on("end", function(data)
	{
		console.log(dataContent.length);
		console.log(dataContent);
	});
});
