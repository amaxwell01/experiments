/* ==========================================================================
   Iterator
   * Create a simple iterator which will spit out the come out of an array
   * Spit out the items in an array, once it is complete, it will throw an
   * error
   ========================================================================== */
var Iterator = function( contentArray ) {
    this._increment = 0;
    this._contentArray = contentArray;
};

Iterator.prototype.next = function() {
    var output;
    
    output = this._contentArray[ this._increment ];
    
    if ( typeof(output) !== 'undefined' ) {
        this._increment += 1;
        return output;
    } else {
        throw 'You are out of items in your array';
        return false;
    }
};

var SkipIterator = function( inputIter ) {
    this._inputIter = inputIter;
    this._skip = 1;
};

SkipIterator.prototype.next = function() {
    var output;
    var increment;
    
    // Silently incremented
    for ( increment = 0; increment < this._skip; increment += 1 ) {
        this._inputIter.next();
    }

    output = this._inputIter.next();
    
    if ( typeof(output) !== 'undefined' ) {
        return output;
    } else {
        throw 'You are out of items in your array';
        return false;
    }
};

var myIntContent = [1, 2, 3, 4, 5];
var myTextContent = ['Andrew', 'Whitney', 'Banks', 'Penny'];
var myIter = new Iterator( myIntContent );
var mySkipIter = new SkipIterator( myIter );

var myTextIter = new Iterator( myTextContent );
var myTextSkipIter = new SkipIterator( myTextIter );
