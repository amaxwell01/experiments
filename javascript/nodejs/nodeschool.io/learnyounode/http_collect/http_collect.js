// HTTP Collect
var http = require('http');

var url = process.argv[2];

var getContent = http.get(url, function(response) {
    var dataChunks = '';

    response.setEncoding('utf8');
    
    response.on('error', function (err) {
        console.log(err);
    });

    response.on('data', function (chunk) {
        dataChunks += chunk;
    });

    response.on('end', function () {
        console.log(dataChunks.length);
        console.log(dataChunks);
    });
}).on('error', function(err) {
    console.log(err);
});
