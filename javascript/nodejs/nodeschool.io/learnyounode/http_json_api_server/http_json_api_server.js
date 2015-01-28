// HTTP JSON API SERVER

var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var urlParsed = url.parse(request.url, true);
    var userDate = urlParsed.query.iso.split('=')[1];
    var time = new Date(urlParsed.query.iso.split('Z')[0]);
    var timeObject;

    var zeroFill = function(value) {
        return (value < 10 ? '0' : '') + value;
    }

    if (urlParsed.pathname === '/api/parsetime') {
        timeObject = {
            hour: Number(time.getHours()),
            minute: Number(time.getMinutes()),
            second: Number(time.getSeconds())
        };
    }

    if (urlParsed.pathname === '/api/unixtime') {
        var timeObject = {
            unixtime: userDate
        };
    }

    response.write(JSON.stringify(timeObject));
    response.end();
});

server.listen(Number(port));
