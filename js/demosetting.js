	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		
		if($.cookie("css")) {
			$("#css-bg").attr("href",$.cookie("css"));
		}
		$("#stylechanger li a, #stylechanger-right li a").click(function() { 
			$("#css-bg").attr("href",'bg-options/'+$(this).attr('rel'));
			$.cookie("css",'bg-options/'+$(this).attr('rel'), {expires: 365, path: '/'});
			return false;
		});
		
		
	$(".openpanel").click(function(){$(".panel").toggle("slow");$(this).toggleClass("active");return false});	
				});