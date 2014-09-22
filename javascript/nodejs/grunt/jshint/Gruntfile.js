/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                force: true,
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                // reporterOutput: 'logs/jshint.log'
            },
            all: ['Gruntfile.js', 'libs/**/*.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
