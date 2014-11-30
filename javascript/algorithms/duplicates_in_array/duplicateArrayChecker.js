// Input: An array of size N in which every number is between 1 and N
// Goal: determine if there are any duplicates

var exampleArray = [99, 54, 87, 65, 49, 53, 22, 70, 59, 12, 12];

var duplicateArrayChecker = function(userArray) {
    var duplicateArray = [];
    var i;

    // Sort the users array
    // This uses a simple quicksort
    userArray.sort();

    // when the array is sorted, sort the duplicates into their own array
    // loop over the array to find duplicates
    for (i = userArray.length - 1; i >= 0; i--) {
        if (userArray[i] === userArray[i - 1]) {
            duplicateArray.push(userArray[i]);
        }
    };

    // Return true / false if there are any duplicates in this new array
    return !!duplicateArray.length;
};

console.log(duplicateArrayChecker(exampleArray));
