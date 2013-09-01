module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n <%= pkg.title || pkg.name %> - v<%= pkg.version %> - '
      + '<%= grunt.template.today("yyyy-mm-dd") %>\n'
      + ' <%= (pkg.homepage ? "* " + pkg.homepage : pkg.repository.url) + "\\n" %>'
      + ' Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <%= pkg.author.url %>;\n'
      + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n'
      + '\n Requires jQuery UI Autocomplete \n*/\n',

    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['src/ui.geo_autocomplete.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    watch: {
      files: ['Gruntfile.js', 'src/**/*'],
      tasks: 'concat'
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);

}
