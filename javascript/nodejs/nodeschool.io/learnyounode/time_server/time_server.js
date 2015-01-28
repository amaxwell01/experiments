// Time Server
var net = require('net');

var port = process.argv[2];
var myDate = new Date();

var now = function() {
    var month = (myDate.getMonth() + 1);
    var day = myDate.getDate();

    var zeroFill = function(value) {
        return (value < 10 ? '0' : '') + value;
    }

    return (myDate.getFullYear() + '-' +
                 zeroFill(month) + '-' +
                 zeroFill(day) + ' ' +
                 zeroFill(myDate.getHours()) + ':' +
                 zeroFill(myDate.getMinutes()) + '\n');
}

var server = net.createServer(function(socket) {
    socket.end(now());
});

server.listen(Number(port));
