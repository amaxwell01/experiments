// LinkedList
var linkedList = {

    init: function() {
        this._head = null;
    },

    append: function( item ) {
        var newNode = Node(item);

        if ( this._head ) {
            node = this._head;

            while (node.getOther() ) {
                node = node.getOther();
            }

            node.setOther( newNode );
        } else {
            this._head = newNode;
        }
    },

    getItem: function( index ) {
        var node = this_.head;
        var i;

        for ( i = 0; i < index; i += 1 ) {
            node = node.getOther();
        }

        return node.getItem();
    },

    setItem: function( index, item ) {
        var node = this._head;
        var i;

        for ( i = 0; i < index; i += 1 ) {
            node = node.getOther();
        }

        return node.setItem( item );
    }
};
