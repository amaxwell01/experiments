// Given a list of unsorted numbers, can you find the numbers that
// have the smallest absolute difference between them? If there are
// multiple pairs, find them all. 


var myArray = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470];
var myArray = [-20, 30, 6246457, -6461594, -520, -470];
//var myArray = [-20, 30, 6246457, -6461594];

var smallestDifference = function( arrayOfNumbers ) {
    var smallestPairs = [];
    var arrayLength = arrayOfNumbers.length;
    var increment;
    var increment2;
    var increment3;
    var valueToCheck;

    var addSet = function( first, second, difference ) {
        smallestPairs.push( [first, second, difference] );
    };

    for ( increment = 0; increment < arrayLength - 1; increment += 1 ) {

        // Loop through the 
        for ( increment2 = 0; increment2 < arrayLength - 1; increment2 += 1 ) {
            valueToCheck = (arrayOfNumbers[increment2] - arrayOfNumbers[increment2 + 1]);
            
            // Loop through the smallest pairs
            if ( smallestPairs.length ) {
                for ( increment3 = smallestPairs.length - 1; increment3 >= 0; increment3 -= 1 ) {
                    if ( Math.abs(valueToCheck) <= Math.abs(smallestPairs[increment3][2]) ) {

                        if ( arrayOfNumbers[increment2] === smallestPairs[increment3][0] &&
                            arrayOfNumbers[increment2 + 1] === smallestPairs[increment3][1] ) {
                            smallestPairs.splice(increment3, 1);
                        }

                        addSet( arrayOfNumbers[increment2], arrayOfNumbers[increment2 + 1], arrayOfNumbers[increment2] - arrayOfNumbers[increment2 + 1] );
                    }
                }
            } else {
                addSet( arrayOfNumbers[increment2], arrayOfNumbers[increment2 + 1], arrayOfNumbers[increment2] - arrayOfNumbers[increment2 + 1] );
            }
        }
    }

    return smallestPairs;
};

smallestDifference( myArray );
