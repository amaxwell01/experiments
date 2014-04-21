/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jscs: {
            src: 'assets/*.js',
            options: {
                config: '.jscs.json'
            },
            force: true,
            reporterOutput: 'jscs-checker-results'
        }
    });

    grunt.registerTask('default', ['jshint']);
    grunt.loadNpmTasks("grunt-jscs-checker");
};
