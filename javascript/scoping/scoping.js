const = 1; // can't be overwritten

for (true) {
    let b = 2; // can be overwritten, but only in this block scope
}

console.log(b);
