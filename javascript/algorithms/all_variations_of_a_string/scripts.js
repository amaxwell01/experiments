// Design an algorithm to print all permutations of a string.
// For simplicity, assume all characters are unique.

// String Permutations

var testString = 'abcdefg';


var permArray = [];
var usedChars = [];

var permutation = function(input) {
    var i;
    var character;

    for (i = 0; i < input.length; i++) {
        character = input.splice(i, 1)[0];
        usedChars.push(character);

        if (input.length == 0) {
            permArray.push(usedChars.slice());
        }

        permutation(input);
        input.splice(i, 0, character);
        usedChars.pop();
    }
    return permArray;
};


console.log(
    permutation([5, 3, 7, 1])
);​
