// Filtered LS

var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = process.argv[3];
var filteredFiles = [];

var filteredLS = fs.readdir(directory, function(err, list) {
    if (err) {
        return;
    }

    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === ('.' + extension)) {
            filteredFiles.push(list[i]);
            console.log(list[i]);
        }
    }
});
