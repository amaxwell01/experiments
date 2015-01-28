// REST
module.exports = (...args) => {
    var sum = args.reduce((previousValue, nextValue) => previousValue + nextValue, 0);

    return sum / args.length;
};
