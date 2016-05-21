// arrow functions
var foo = function(a, b) {
    return a + b;
}

var foo = (a, b) => {
    return a + b;
}

do.something(function(a, b) {
    return a + b;
});

do.something(a, b => {return a + b; })
do.something(a, b => a + b);
do.something(a => a++);
[0, 1, 2].map(val => val++); // [1, 2, 3];
