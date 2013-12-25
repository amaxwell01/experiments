var server = require('./node-router.js').getServer();

server.get('/', function( request, response ) {

    var fs = require('fs');
    var files = fs.readdirSync( __dirname );

    for ( var file in files ) {
        response.simpleText( 200, files[file] );
    }
});

server.listen(8000, 'localhost');
