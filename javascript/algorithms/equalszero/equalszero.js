// an array of integers
// len: 1 => any
// t/f if any 3 elem add up to zero
// [5, -3, -1, -2] T 5 + -3 + -2 = 0
// [-1, 2] T -1 + -1 + 2 = 0
// [0] 0 + 0 + 0 = 0!

var EqualsZero = function(myArray) {
    var firstElement;
    var localEqualsZero;
    var sortedArray;
    
    if (!myArray) {
        return false;
    }
    
    if (myArray[0] === 0) {
        return true;
    }

    
    var checkValue = function(items, element1) {
        var localEqualsZero;
        var secondNumber;
        
        for (var i = 0; i < items.length - 1; i++) {
            if (element1 + items[i] === 0) {
                return true;
            } else {
                secondNumber = (element1 + items[i]); // [5]
            }
        }
        
        if (secondNumber) { // 5
            for (var j = 0; j < items.length; j++) {
                if (element1 + secondNumber === 0) {
                    return true;
                }
                
                if (i === items.length) {
                    return false;
                }
            }
        }
        
        return localEquals;
    };
    
    if (myArray.length > 1) {
        var sortedArray = myArray.sort();

    
        for (var i = 0; i < myArray.length; i++) {
            if (i === 1) {
                firstElement = myArray[i]; // 5
            }
            
            checkValue(sortedArray, i]); // [5]
        }
    }
};
