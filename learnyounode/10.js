var net = require('net')

function pad(number) {
  return number < 10 ? "0" + number : number;
}

var server = net.createServer(function(socket) {
	var date = new Date();
	socket.end(date.getFullYear() + "-" + pad(date.getMonth()+1) + "-" + pad(date.getDate())
		+ " " + pad(date.getHours()) + ":" + pad(date.getMinutes()) + "\n");
})
server.listen(process.argv[2])
