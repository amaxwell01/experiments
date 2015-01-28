// HTTP File Server

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response) {
    var fileContent = fs.createReadStream(file);
    fileContent.pipe(response);
});

server.listen(Number(port));
