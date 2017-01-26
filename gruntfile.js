module.exports = function(grunt){
	grunt.initConfig({
		watch: {
    scripts: {
    files: ['*.js'],
    tasks: ['concat','uglify','jshint'],
   
    },
  },

    
	uglify:{
	
    my_target: {
      files: {
        'dest/output1.min.js': ['public/js/*.js'],
		'dest/output2.min.js': ['*.js']
      }
    }
  },   
  
  jshint: {
    all: ['build/*.js','dest/*.js']
  },
  
	concat:
	    {
			js:{
			src:['public/js/*.js'],
			dest:'build/js/scriptsjSMain.js',
			},
			
			css:{
			src:['public/css/*.css'],
			dest:'build/js/scriptsCSSMain.css',
			},
			
			themes:{
			src:['public/css/themes/*.css'],
			dest:'build/themes/scriptsThemesMain.css',
			},
			
			dist:{
			src: ['app.js','task2.js','testing.js','vote.js'],
			dest: 'build/main/scripts.js'	
			},			
			  
		}, 
			  
			  
       });
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};