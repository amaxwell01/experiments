var LinkedList = function() {
    var self = this;
    self.head = null;

    self.add = function(value) {
        var self = this;
        var node = {
            value: value,
            next: null
        };
        var current;

        if (self.head === null) {
            self.head = node;
        } else {
            current = self.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        return node;
    };

    self.remove = function(node) {
        var self = this;
        var value = node.value;
        var current;

        if (self.head !== null) {
            if (self.head === node) {
                self.head = self.head.next;
                node.next = null;

                return value;
            }

            current = self.head;

            while (current.next) {
                if (current.next === node) {
                    current.next = node.next;

                    return value;
                }

                current = current.next;
            }
        }
    };

    return self;
};


var list = new LinkedList();
list.add(4);
var obj = list.add(5);
list.remove(obj);
list.add(6);
console.log(list);
