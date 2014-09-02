var fs = require('fs');
var files = fs.readdirSync( __dirname );

for ( var file in files ) {
    console.log( files[file] );
}
