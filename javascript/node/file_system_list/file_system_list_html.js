var server = require('http');
var fs = require('fs');
var directoryFiles = fs.readdirSync( __dirname );
var files = '<ul>';

server.createServer( function( request, response ) {
    response.writeHeader(200, {'Content-Type': 'text/html'});
    
    for ( var file in directoryFiles ) {
        files += '<li><a href="/' + directoryFiles[file] + '" target="_blank">' + directoryFiles[file] + '</a></li>';
    }

    files += '</ul>';

    response.write( files );
    response.end('Hello World\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
