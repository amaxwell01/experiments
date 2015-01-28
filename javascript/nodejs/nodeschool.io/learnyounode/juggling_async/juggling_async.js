// Juggling Async
var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var getContent = function(url, callback) {
    http.get(url, function(response) {
        var dataChunks = '';
        response.setEncoding('utf8');
        
        response.on('error', function (err) {
            console.error(err);
        });

        response.on('data', function (chunk) {
            dataChunks += chunk;
        });

        response.on('end', function () {
            callback(dataChunks);
        });
    }).on('error', function(err) {
        console.log(err);
    });
};

var getAllContent = function(urls, callback) {
    var count = urls.length;
    var content = [];

    urls.forEach(function(value, key, urls) {
        getContent(value, function(data) {
            content[key] = data;

            count--;

            if (count === 0) {
                callback(content);
            }
        });
    });
};

getAllContent(urls, function(data) {
    data.forEach(function(value, key) {
        console.log(value);
    });
});
