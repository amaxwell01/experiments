var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);

// Add the route

server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		reply('Hapi, Hapi, joi, joi');
	}
});

server.start();