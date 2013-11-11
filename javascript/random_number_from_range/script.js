var randomNumberFromRange = function( min, max ) {
    return Math.random() * (max - min) + min;
};

var randomNumberFromRangeInt = function( min, max ) {
    return Math.floor(Math.random() * (max - min) + min);
};

console.log('randomNumberFromRange', randomNumberFromRange(1, 10));
console.log('randomNumberFromRange', randomNumberFromRange(5, 100));

console.log('randomNumberFromRangeInt', randomNumberFromRangeInt(1, 10));
console.log('randomNumberFromRangeInt', randomNumberFromRangeInt(5, 100));
