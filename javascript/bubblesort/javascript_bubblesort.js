// Bubblesort
var bubbleSort = function( myArray ) {
    var myArrayLength = myArray.length;
    var i;
    var hasHadChange;
    var j;
    var tempArray;

    // Check to ensure that we have arguments and the argument is an array
    if ( !arguments.length || !Array.isArray( myArray ) ) {
        console.log( 'no array' );
    }

    // Check the algorithm
    for ( i = 0; i < (myArrayLength - 1); i++ ) {
        hasHadChange = false;
        
        for ( j = 0; j < (myArrayLength - 1); j++ ) {
            if( myArray[j] > myArray[j + 1] ) {
                hasHadChange = true;
                tempArray = myArray[j];
                myArray[j] = myArray[j+1];
                myArray[j+1] = tempArray;
            }
        }

        if ( !hasHadChange ) {
            return myArray;
        }
    }

    return myArray;
};


var myTestArray1 = [5,9,2,7,1];
var myTestArray2 = [5,9,2,7,1, 14, 11, 10, 9, 4];

console.log(
    bubbleSort( myTestArray1 );
);

console.log(
    bubbleSort( myTestArray2 );
);
