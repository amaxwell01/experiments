// Template Strings
var name = process.argv[2];
var helloString = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;

console.log(helloString);
