// My First IO

var fs = require('fs');

// Read the files contents
var fileContents = fs.readFileSync(process.argv[2]);

var fileContentsString = fileContents.toString().split('\n');

console.log((fileContentsString.length) - 1);
