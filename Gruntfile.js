module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		bower: {
			install: {
				options: {
					targetDir: './public/js/lib',
					layout: 'byComponent',
					install: true,
					verbose: false,
					cleanTargetDir: false,
					cleanBowerDir: false,
					bowerOptions: {}
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					base: 'public',
					keepalive: true
				}
			}
		},

		watch:{
			options:{
				livereload: true
			},
			scripts: {
				files: 'public/js/app/*.js',
				options: {
					event: ['all']
				}
			},
			html:{
				files: 'public/index.html',
				options: {
					event: ['changed']
				}
			}
		}
	});
	
	grunt.registerTask('server', ['connect']);
};