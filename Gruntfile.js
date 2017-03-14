module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yaml: {
            your_target: {
                options: {
                    ignored: /^_/,
                    space: 4,
                    customTypes: {
                        '!include scalar': function(value, yamlLoader) {
                            return yamlLoader(value);
                        },
                        '!max sequence': function(values) {
                            return Math.max.apply(null, values);
                        },
                        '!extend mapping': function(value, yamlLoader) {
                            return _.extend(yamlLoader(value.basePath), value.partial);
                        }
                    }
                },
                files: [
                    {expand: true, cwd: 'templates/', src: ['**/*.yml'], dest: 'output/'}
                ]
            },
        },
        yamllint: {
            all: ['Templates/*.yaml']
        },
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-yaml');
    grunt.loadNpmTasks('grunt-yamllint');

    // Default task(s).
    grunt.registerTask('default', ['yaml', 'yamllint']);

};