module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      less: {
        files: ['public/style/**/*.less'],
        tasks: ['less:dev']
      }
    },
    less: {
      dev: {
        files: {
          'public/dist/style.css': 'public/style/**/*.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less:dev', 'watch']);
};
