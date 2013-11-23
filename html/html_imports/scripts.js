var myBody = document.body.querySelector('main');

var htmlImport = document.querySelector('link[rel="import"]').import;
var mySection = htmlImport.querySelector('section').cloneNode(true);

myBody.appendChild( mySection );
