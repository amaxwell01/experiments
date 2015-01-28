module.exports = function(directory, extension, callback) {
    var fs = require('fs');
    var path = require('path');
    var filteredFiles = [];

    var filteredLS = fs.readdir(directory, function(err, list) {
        if (err) {
            return callback(err);
        }

        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === ('.' + extension)) {
                filteredFiles.push(list[i]);
            }
        }

        callback(err, filteredFiles);
    });
};
