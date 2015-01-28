// Make It Modular

var filteredModule = require('./filtered_module')
var directory = process.argv[2];
var extension = process.argv[3];

filteredModule(directory, extension, function(err, data) {
    if (err) {
        return;
    }

    data.forEach(function(value, index) {
        console.log(value);
    });
});
