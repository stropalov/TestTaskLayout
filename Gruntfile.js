/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      dist: {
        src: ['js/main.js'],
        dest: 'build/js/main.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/main.js',
        dest: 'build/js/main.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
	sass: {
		dist: {
			options:{
				style: 'compressed'
			},
		    files: {
			    'build/css/main.css': 'css/sass/main.sass'
		    }
		}
	},
    watch: {
		scripts: {
			files: 'js/*.js',
			tasks: ['default']
	    },
		css: {
			files: 'css/sass/*.sass',
			tasks: ['sass']
		}
    },
	copy: {
		main: {
			files: [
			  {expand: true, src: ['img/*'], dest: 'build/', filter: 'isFile'},
			  {expand: false, src: ['*.html'], dest: 'build/', filter: 'isFile'},
			  {expand: false, src: ['js/*.min.js'], dest: 'build/', filter: 'isFile'},
			  {expand: false, src: ['css/*.min.css'], dest: 'build/', filter: 'isFile'},
			]
		}
	}
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'copy']);

};
