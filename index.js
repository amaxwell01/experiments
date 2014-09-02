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

    try {
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
            directoryData += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
            directoryData += '<style>ul {list-style-position: inside; padding-left: 0;} li {padding: 5px; color: red; border: solid 1px #CCC; font-size: 1.1em; list-style-type: none; border-bottom: none;} li:last-child { border-bottom: solid 1px #CCC;} li a {color: #333; text-decoration: none;} li.folder {background-color: #fcfcfc;} li:hover a { color: #6ea748; }</style>';
            directoryData += '</head>';
            directoryData += '<body>';
            directoryData += '<ul>';
            directoryData += '<li><a href="../" target="_self"/>..</a></li>';

            for (file in directoryFiles) {
                if (fs.lstatSync(__dirname + path + directoryFiles[file]).isDirectory()) {
                    folders += '<li class="folder"><a href="' + path + directoryFiles[file] + '/" target="_self">' + directoryFiles[file] + '</a></li>';
                } else {
                    files += '<li class="file"><a href="' + path + directoryFiles[file] + '" target="_self">' + directoryFiles[file] + '</a></li>';
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
    } catch (error) {
        var requestText = ' requested and not found';
        var data = (__dirname + path) + requestText;

        // If the type is not what you want, then just throw the error again.
        if (error.code !== 'ENOENT') {
            throw error;
        }

        // Handle a file-not-found error
        response.writeHeader(404, {'Content-Type': 'text/plain'});
        response.write(request.url + requestText);
        response.end();
        console.log(data);
    }
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
