var Hapi = require('hapi');

var host = 'localhost';
var port = 8123;

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: host, 
    port: port
});

// Add the routes
server.route([
    {
        method: 'GET',
        path:'/{param*}', 
        handler: {
            file: './index.html'
        }
    },
    {
        method: 'GET',
        path: '/components/{param*}',
        handler: {
            directory: {
                path: 'components'
            }
        }
    }
]);

// Start the server
server.start();
console.log('Server started on http://' + host + ':' + port);
