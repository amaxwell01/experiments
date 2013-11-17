// RegExp Examples
var text = 'My Name Is Andrew';
var text2 = 'My Name Is andrew';
var pattern = /Andrew/i;

// Returns truthy
if ( pattern.test(text) ) {
    console.log( 'test', pattern.test(text) );
}

// Returned truthy
if ( pattern.test(text2) ) {
    console.log( 'test2', pattern.test(text2) );
}

// Returns the matched string / pattern
if ( !!pattern.exec(text) ) {
    console.log( 'exec', text.replace(pattern.exec(text), 'Whitney' ) );
    console.log( 'exec', text2.replace(pattern.exec(text2), 'Whitney' ) );
}

// Returns an array with the matched string, index, and full string it searched through
if ( text.match(pattern) ) {
    console.log( 'match', text.match(pattern) );
}

// Returns the start location
if ( text.search(pattern) ) {
    console.log( 'search', text.search(pattern) );
}
