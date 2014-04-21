/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jscs: {
            src: 'assets/*.js',
            options: {
                config: '.jscs.json'
            }
        }
    });

    grunt.registerTask('default', ['jscs']);
    grunt.loadNpmTasks("grunt-jscs-checker");
};
