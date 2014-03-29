'use strict';

// url config
var urlConfig = {
    protocol : 'http',
    host : 'localhost',
    port : '8877',
    urlPath : '/ui5-boilerplate'
}

module.exports = function(grunt) {

    // load tasks from plugins
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // config
    grunt.initConfig({
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        open: {
            dev: {
                path: urlConfig.protocol + '://' + urlConfig.host + ':' + urlConfig.port + urlConfig.urlPath
            }
        },
        express: {
            options: {
                // Override defaults here, see more at: https://npmjs.org/package/grunt-express-server
                args: [urlConfig.protocol, urlConfig.host, urlConfig.port, urlConfig.urlPath]
            },
            dev: {
                options: {
                    script: 'dev_server.js',
                    delay: 100
                }
            }
            // add more servers here...
        }
    });

    // events
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

    // tasks
    grunt.registerTask('server:dev', ['express:dev', 'open:dev', 'watch']);
    grunt.registerTask('server', ['server:dev']); // alias for "server:dev", since there are no other servers (yet)
    grunt.registerTask('default', ['server:dev']); // default points to 'server' task

};