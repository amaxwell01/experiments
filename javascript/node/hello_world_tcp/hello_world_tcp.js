var net = require('net');
var server = net.createServer( function( client ) {
    console.log('server connected');
    client.on('end', function() {
        console.log('server disconnected');
    });
    client.write('hello\r\n');
    client.pipe(client);
});
server.listen(8124, function() {
    console.log('server bound');
});
