/**
 * uglify.js
 *
 * Uglifies javascript files
 *
 * @package grunt
 * @subpackage tasks 
 * @author Chintan Kotadia <kotadiachintan@gmail.com>
 */

module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            mangle: false
        },
        dist: {
            files: {
                '<%=paths.js%>build.js': '<%=paths.js%>build.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
