var myGen = function*() {
    var one = yield 1;
    var two = yield 2;
    var three = yield 3;

    console.log(one, two, three);
};

var gen = myGen();

console.log('1', gen.next());
console.log('2', gen.next());
console.log('3', gen.next());
console.log('4', gen.next());
console.log('5', gen.next());
