'use strict';

var myGen = regeneratorRuntime.mark(function myGen() {
    var one, two, three;
    return regeneratorRuntime.wrap(function myGen$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return 1;

            case 2:
                one = context$1$0.sent;
                context$1$0.next = 5;
                return 2;

            case 5:
                two = context$1$0.sent;
                context$1$0.next = 8;
                return 3;

            case 8:
                three = context$1$0.sent;

                console.log(one, two, three);

            case 10:
            case 'end':
                return context$1$0.stop();
        }
    }, myGen, this);
});

var gen = myGen();

console.log('1', gen.next());
console.log('2', gen.next());
console.log('3', gen.next());
console.log('4', gen.next());
console.log('5', gen.next());