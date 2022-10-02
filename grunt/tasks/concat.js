/**
 * concat.js
 *
 * Concats all the javascripts into single file
 *
 * @package grunt
 * @subpackage tasks 
 * @author Chintan Kotadia <kotadiachintan@gmail.com>
 */

module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            separator: ';',
        },
        dist: {
            files: {
                './js/build.js': [
                    '<%=paths.nmodules%>jquery/dist/jquery.js',
                    '<%=paths.nmodules%>bootstrap/dist/js/bootstrap.js',
                    '<%=paths.js%>library/**/*.js',
                    '<%=paths.js%>app/*.js'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
