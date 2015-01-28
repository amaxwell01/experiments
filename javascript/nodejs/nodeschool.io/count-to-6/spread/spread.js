// Spread
var inputs = process.argv.slice(2);
var minValue = Math.min(...inputs);

console.log(`The minimum of [${inputs}] is ${minValue}`);
