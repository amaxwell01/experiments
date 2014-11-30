var randomNumbersArray;

var randomNumber = function(count) {
    var localRandomNumbers = [];
    var tempNumber;
    var i;

    for (i = 0; i < count; i++) {
        tempNumber = Math.random() * 100;
        localRandomNumbers.push(Math.floor(tempNumber));
    }

    return localRandomNumbers;
}

console.log(randomNumbersArray = randomNumber(10));
