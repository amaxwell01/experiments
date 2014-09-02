var server = require('./node-router.js').getServer();

server.get('/', function( request, response ) {
    response.simpleText(200, 'Hello World!');
});

server.listen(8000, 'localhost');
