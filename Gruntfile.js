'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		less: {
			dev: {
				options: {
					path: 'contents/css/less'
				},
				files: {
					'contents/css/main.css': 'contents/css/less/main.less'
				}
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: ['contents/css/main.css', 'contents/articles/**/**', 'templates/*.jade']
				},
				options: {
					proxy: 'localhost:8080'
				}
			}
		},
		watch: {
			dev: {
				files: ['contents/css/less/*.less'],
				tasks: ['less']
			}
		},
		concurrent: {
			dev: {
				tasks: ['watch', 'browserSync'],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['concurrent']);
};