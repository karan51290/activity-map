var clicks = [];

$(document).ready(function(){
	$('a').each(function(i,val){
		//var acss = $(this).css();
		$(this).attr("id","link"+i);
		$()
		//console.log("link"+i);
		//$(this).css(acss);	
		clicks.push(0);
		//console.log(i);

	}); 



	$('a').click(function(){
		var id = $(this).attr("id");
		console.log(id);
		id = id.substring(4,6);
		clicks[id] += 1;
		console.log(clicks[id]);
	});
});

