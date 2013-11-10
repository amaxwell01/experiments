var multiply = function(x) {
    return x * 2;
};
 
var myMath = {
    _multiplyBy: 5,
    
    multiply: function(x) {
        return x * this._multiplyBy;
    },
    
    multiplyBy: function() {
        return this.multiply(5);
    }
};
 
var mathBind = myMath.multiplyBy.bind(myMath);
var mathNoBind = myMath.multiplyBy;
console.log( 'Module example: ', myMath.multiplyBy() ); // Expect 25
console.log( 'Bind example: ', mathBind() ); // Expect 25
console.log( 'NoBind example: ', mathNoBind() ); // Expect 10
