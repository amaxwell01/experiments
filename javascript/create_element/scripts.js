var newElement = document.createElement('div');
var myBody = document.getElementsByTagName('body')[0];

newElement.innerHTML = '<h1>Hello World!</h1>';
myBody.appendChild( newElement );
