// HTTP UPPERCASERER

var http = require('http');

var port = process.argv[2];

var server = http.createServer(function(request, response) {

    if (request.method === 'POST') {
        // console.log(request);

        request.on('data', function (chunk) {
            response.write(chunk.toString().toUpperCase());
        });

        request.on('end', function() {
            response.end();
        });
    }
});

server.listen(Number(port));
