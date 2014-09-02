var fs = require('fs');
var express = require('express');
var app = express();

app.get('/*', function(request, response){
    var directoryFiles;
    var files = '';
    var folders = '';
    var path = (request.url === 'favicon.ico') ? '/' : request.url;
    var directoryData = '';
    var file;

    if (request.url === '/favicon.ico' ||
        request.url === '/robots.txt') {
        response.writeHeader(200, {'Content-Type': 'image/x-icon'} );
        response.end();
        console.log(request.url + ' requested');
        return;
    }
    
    if (fs.lstatSync(__dirname + path).isFile()) {
        response.writeHeader(200, {'Content-Type': 'text/plain'});
        fs.readFile(__dirname + path, 'utf8', function (error, data) {
            if (error) {
                throw error;
            }
            response.write(data);
            response.end();
        });
    } else {
        directoryFiles = fs.readdirSync(__dirname + path);
        response.writeHeader(200, {'Content-Type': 'text/html'});
        
        directoryData += '<html>';
        directoryData += '<head>';
        directoryData += '<style>ul {list-style-position: inside; padding-left: 0;} li {padding: 5px; color: red; border: solid 1px #CCC; list-style-type: none;} li a {color: #333; text-decoration: none;}</style>';
        directoryData += '</head>';
        directoryData += '<body>';
        directoryData += '<ul>';
        directoryData += '<li><a href="../" target="_self"/>..</a></li>';

        for (file in directoryFiles) {
            if (fs.lstatSync(__dirname + path + directoryFiles[file]).isDirectory()) {
                folders += '<li><a href="' + path + directoryFiles[file] + '/" target="_self">' + directoryFiles[file] + '</a></li>';
            } else {
                files += '<li><a href="' + path + directoryFiles[file] + '" target="_self">' + directoryFiles[file] + '</a></li>';
            }
        }

        directoryData += folders;
        directoryData += files;

        directoryData += '</ul>';
        directoryData += '</body>';
        directoryData += '</html>';
        response.write(directoryData);
        response.end();
    }
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
