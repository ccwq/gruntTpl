module.exports = function(grunt){
	grunt.initConfig({
		sync:{
			copy_one:{
				files:[
					{
						cwd:"project/from/",		//Ŀ��
						dest:"project/to/",			//Դ
						src:[						//������!��ͷ��ʾ��
							"**",
							"!**.less"
						]
					}
				
				]
			}
			
		}, //end of sync
		
		
		//��������
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
						cwd:"project/from/",		//Ŀ��
						src:["**.l","**.less"],
						dest:"project/to/",			//Դ
						ext:".css"
					}
				]
			}
		}
	
	});
	
	//���ز��
	grunt.loadNpmTasks("grunt-sync");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	
	//Ĭ������
	//grunt.registerTask("default",["sync"]);
	
	
	
	grunt.registerTask("docopy",["sync"]);
	
	grunt.registerTask("copy__",["watch:copy1"]);
	
	grunt.registerTask("ls",["less:lessdo"]);
	
	grunt.registerTask("doless",["watch:doless"]);

}