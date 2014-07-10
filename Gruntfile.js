module.exports = function(grunt){
	grunt.initConfig({
		sync:{
			copy_one:{
				files:[
					{
						cwd:"project/from/",		//目标
						dest:"project/to/",			//源
						src:[						//过滤器!开头表示否
							"**",
							"!**.less"
						]
					}
				
				]
			}
			
		}, //end of sync
		
		
		//持续任务
		watch:{
			copy1:{
				tasks:["sync:copy_one"],
				files:["**/*"]
			
			},
			
			doless:{
				tasks:["less:lessdo"],
				//files:["**.l, **.less"]
				files:["**/*.l", "**/*.less"]
					
				
				
			}
			
		},
		
		less:{
			lessdo:{
				files:[
					{
						expand:true,
						cwd:"project/from/",		//目标
						src:["**.l","**.less"],
						dest:"project/to/",			//源
						ext:".css"
					}
				]
			}
		}
	
	});
	
	//加载插件
	grunt.loadNpmTasks("grunt-sync");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	
	//默认任务
	//grunt.registerTask("default",["sync"]);
	
	
	
	grunt.registerTask("docopy",["sync"]);
	
	grunt.registerTask("copy__",["watch:copy1"]);
	
	grunt.registerTask("ls",["less:lessdo"]);
	
	grunt.registerTask("doless",["watch:doless"]);

}