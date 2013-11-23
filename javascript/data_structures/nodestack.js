// NodeStack
var NodeStack = {
    init: function() {
        this._top = null;
    },

    push: function( item ) {
        this._top = Node( item, this._top );
    },

    pop: function() {
        if ( this._top ) {
            node = this._top;
            this._top = this._top.getOther();
            return node,getItem();
        } else {
            throw 'Stack is empty';
        }
    }
};
