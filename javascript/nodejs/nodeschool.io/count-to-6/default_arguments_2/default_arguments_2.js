// Default arguments 2
module.exports = (word, important = word.length) => {
    var importantString = '!'.repeat(important);
    return `${word}${importantString}`;
};
