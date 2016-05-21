/* ===========================================================================
    Create a JavaScript framework which can pull in templates from JavaScript
    and render out clean markup
    ========================================================================== */

// import template from 'template.js';
var template = require('./template.js');

var files = [
    {
        folder_hash: '1',
        folder_name: 'Andrew',
        folder_updated_at: '1:2:3:4'
    },
    {
        folder_hash: '2',
        folder_name: 'Whitney',
        folder_updated_at: '1:2:3:5'
    },
    {
        folder_hash: '3',
        folder_name: 'Banks',
        folder_updated_at: '1:2:3:6'
    }
];

var list = '<ul>';
files.forEach(function(value, key) {
    list += template(value);
});
list += '</ul>'
console.log(list);
