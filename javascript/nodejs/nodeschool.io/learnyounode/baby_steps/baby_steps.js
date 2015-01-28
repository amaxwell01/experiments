// BABY STEPS

var userImports = process.argv;
var myNumber = 0;

for (var i = 2; i < userImports.length; i++) {
    myNumber += Number(userImports[i]);
}

console.log(myNumber);
