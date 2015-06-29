var clicks = [];
var id 

function register(ele){
		id = $(ele).attr("id");
		console.log(id);
		id = id.substring(4,6);
		clicks[id] += 1;
		console.log(clicks[id]);
	};

$(document).ready(function(){
	$('a').removeAttr("href");
	$('a').attr("onclick","register(this)")
	$('a').each(function(i,val){
		//var acss = $(this).css();
		$(this).attr("id","link"+i);
		$()
		//console.log("link"+i);
		//$(this).css(acss);	
		clicks.push(0);
		//console.log(i);

	}); 

});



