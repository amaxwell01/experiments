// Array List
var arrayList = {

    init: function( initSize ) {
        var initSize = 10;
        this._myArray = [ initSize ];
        this._listLength = 0;
        this._arrayLength = initSize;
    },

    append: function( item ) {
        if ( item._listLength == this._arrayLength ) {
            this._myArray += [] * this._arrayLength;
            this._arrayLength *= 2;
        }

        this._myArray[this._listLength] = item;
        this._listLength += 1;
    },

    getItem: function( index ) {
        if ( index >= this._listLength ) {
            throw 'error';
        }

        return this._myArray[index];
    },

    setItem: function( index, item ) {
        if ( index >= this._listLength ) {
            throw 'error';
        }

        return this._myArray[index] = item;
    }
};
