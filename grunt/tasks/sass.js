/**
 * sass.js
 *
 * Generates stylesheets using sass
 *
 * @package grunt
 * @subpackage tasks 
 * @author Chintan Kotadia <kotadiachintan@gmail.com>
 */
const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.config('sass', {
        options: {
            implementation: sass,
            includePaths: [
                '<%=paths.nmodules%>bootstrap/scss'
            ]
        },
        dist: {
            options: {
                outputStyle: 'compressed',
                cacheLocation: './cache/'
            },
            files: {
                '<%=paths.css%>bootstrap.min.css': '<%=paths.scss%>bootstrap.min.scss',
                '<%=paths.css%>style.css': '<%=paths.scss%>style.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};

