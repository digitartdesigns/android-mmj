$(document).ready(function() {
//var url = "https://goldstarmmj.com/?app";    
//$(location).attr('href',url);
$(".container a, #footer_powered a").click(function (e) {
			var inapp = $(this).attr("target");
			var inappform = $(this).attr("target");
			if(inapp=="_blank"){
			e.preventDefault();
			var targetURL = encodeURI($(this).attr("href"));
			window.open(targetURL, "_blank",'location=yes');
			 }
		   });
});
