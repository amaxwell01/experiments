// Arrow functions

var inputStrings = process.argv.slice(2);
var outputStrings = inputStrings.map(data => data.slice(0, 1))
    .reduce((previousValue, currentValue) => (previousValue + currentValue));

console.log(`[${inputStrings}] becomes "${outputStrings}"`);
