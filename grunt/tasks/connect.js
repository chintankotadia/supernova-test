/**
 * connect.js
 *
 * Creates local web server
 *
 * @package grunt
 * @subpackage tasks 
 * @author Chintan Kotadia <kotadiachintan@gmail.com>
 */

module.exports = function(grunt) {
    grunt.config('connect', {
        server: {
            options: {
                livereload: true,
                base: './',
                port: 9009
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};