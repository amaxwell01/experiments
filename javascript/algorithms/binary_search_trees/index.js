// Binary search trees


/*
    URL: http://en.wikipedia.org/wiki/Binary_search_tree

    Example:
    a binary search tree of size 9
    and depth 3, with root 8 and leaves
    1, 4, 7, and 13

    See image in folder
*/

/*
    1. In Order Traversal
    2. 
*/

var BinaryTree = function() {
    var root;

    var addNode = function(key, name) {
        var newNode = new Node(key, name);

        if (root === null) {
            root = newNode;
        } else {
            focusNode = root;

            parent;

            while (true) {
                parent = focusNode;

                if (key < focusNode.key) {
                    focusNode = focusNode.leftChild;

                    if (focusNode === null) {
                        parent.leftChild = newNode;
                        return;
                    }
                } else {
                    focusNode = focusNode.rightChild;

                    if (focusNode === null) {
                        parent.rightChild = newNode;
                        return;
                    }
                }
            }
        }
    };

}

var Node = function() {
    var key;
    var name;

    var leftChild;
    var rightChild;

    Node(key, name) {
        this.key = key;
        this.name = name;
    }

    var toString = function() {
        return name + ' has a key' + key;
    };
};


/*=== METHODS TO TRAVERSE A TREE ===*/
var InOrderTraverseTree = function(focusNode) {
    if (focusNode !== null) {
        InOrderTraverseTree(focusNode.leftChild);
        console.log(focusNode);
        InOrderTraverseTree(focusNode.rightChild);
    }
};
