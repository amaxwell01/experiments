// HTTP Client
var http = require('http');

var url = process.argv[2];

var getContent = http.get(url, function(response) {
    response.setEncoding('utf8');
    
    response.on('error', function (err) {
        console.log(err);
    });

    response.on('data', function (chunk) {
        console.log(chunk);
    });
}).on('error', function(err) {
    console.log(err);
});
