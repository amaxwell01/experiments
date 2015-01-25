// Binary trees


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
    var root = null;

    this.addNode = function(key, name) {
        var newNode = new Node(key, name);
        var focusNode;
        var parent;

        if (root === null) {
            root = newNode;
        } else {
            focusNode = root;

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

    this.getRoot = function() {
        return root;
    };
}

var Node = function(key, name) {
    this.key = key;
    this.name = name;
    this.leftChild = null;
    this.rightChild = null;

    this.toString = function() {
        return name + ' has a key ' + key;
    };
};


var myBinaryTree = new BinaryTree();
myBinaryTree.addNode(7, 'Seven');
myBinaryTree.addNode(77, 'Seventy seven');
myBinaryTree.addNode(3, 'Three');
myBinaryTree.addNode(15, 'Fifteen');
myBinaryTree.addNode(30, 'Thirty');
myBinaryTree.addNode(85, 'Eighty Five');
console.log('BinaryTree with Node Output:', myBinaryTree.getRoot());
