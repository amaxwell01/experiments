// Tagged template strings
var a = process.argv[2] || 'l33t haxor';
var b = process.argv[3] || '<script>alert("pwned!")</script>';
var html = (strings, ...args) => {
    var result = '';

    for (var i = 0; i < strings.length; i++) {
        result += strings[i];

        if (i < args.length) {
            result += replace(args[i]);
        }
    }

    return result;
};

var replace = function(string) {
    return string.replace(/&/g, '&amp;')
                .replace(/'/g, '&#39;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
}

console.log(html`<b>${a} says</b>: "${b}"`);
