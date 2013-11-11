var text1 = 'My name is Andrew!';
var text2 = 'My name is Andrew Maxwell!';

console.log ('localCompare - small to big', text1.localeCompare(text2) );
console.log ('localCompare - big to small', text2.localeCompare(text1) );


var isASmallerThanB = function( itemA, itemB ) {
    return !!itemA.localeCompare( itemB );
};

console.log ('isASmallerThanB: ', isASmallerThanB(text1,text2) );
console.log ('isASmallerThanB: ', isASmallerThanB(text2,text1) );
