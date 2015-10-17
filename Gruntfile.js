module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        transform: ['babelify']
      },
      dev: {
        src: ['src/index.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true,
        single: false
      }
    },

    watch: {
      js: {
        files: ['src/*.js', 'test/*.js'],
        tasks: ['browserify', 'karma:unit:run']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['browserify', 'karma:unit', 'watch']);
};