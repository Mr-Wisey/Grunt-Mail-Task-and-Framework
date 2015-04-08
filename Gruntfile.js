module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {                       // Target options
					style: 'expanded'
				},
				files: {
					'style/style.css' : 'sass/main.scss'
				}
			}
		},
		uncss: {
		  dist: {
          options: {
            ignore: ['a[x-apple-data-detectors]', 'a[href^=tel]', '.roboto'],
          },
			files: {
			  'style/cleaned_style.css': ['index.html']
			}
		  }
		},
		processhtml: {
		  dist: {
			files: {
			  'inline/index.html': ['index.html']
			}
		  }
		},
		premailer: {
		  main: {
			options: {
			  verbose: true
			},
			files: {
			  'inline/index-inline.html': ['inline/index.html']
			}
		  }
		},
		watch: {
			sass: {
				files: [
				'sass/*.scss',
				'sass/*/*.scss'
				],
				tasks: ['build2']
			},
			html: {
				files: [
				'index.html'
				],
				tasks: ['build']
			}
		}
	});
	grunt.registerTask('build', ['sass','uncss', 'processhtml', 'premailer']);
	grunt.registerTask('build2', ['sass']);
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-premailer');	
	grunt.registerTask('default',['watch']);
}