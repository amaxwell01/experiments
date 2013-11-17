/*
Problem: Sorting
Input: Sequence <a1, a2, ... aN> of numbers
Output: Permutations <a1, 12, aN>, re-arrangement of numbers
a1 =< a2 ... =< aN
=========================================
*/

// Insertion Sort (a, N) // sorts a[1...N]
// J is the key
// for j <- 2 to n
//     do key <- arrayA[j]
//         i <- j - 1
//             while i > 0 && arrayA[i] > key
//                     do arrayA[i+1] <- arrayA[j]
//                         i <- i-1
//                     arrayA[i+1] <- key

var arrayA = [1, 5, 7, 2, 11, 6, 3, 4];
var i;
var j;
var key;
var temp;

for ( i = 0; i < arrayA.length; i += 1 ) {

    for ( j = arrayA.length; j > 0 ; j -= 1 ) {
        key = arrayA[i];
        temp = arrayA[j];

        console.log('i', i, arrayA[i]);
        console.log('j', j, arrayA[j]);
        console.log('arrayA', arrayA);

        if ( key < temp ) {
            arrayA[i] = temp;
            arrayA[j] = key;
        }

        break;
    }
}

console.log( arrayA );


