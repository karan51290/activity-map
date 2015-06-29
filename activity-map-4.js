	var clicks = [];
	var id 
	var positions = [];
	var position;
	//var position-type = [];
	//var pos_type;
	var widths = [];
	var width;
	var heights = [];
	var height;

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
			//console.log("link"+i);
			//$(this).css(acss);	
			clicks.push(0);
			//console.log(i);
		});
		$('body').append("<button id= 'map_button' onclick = 'map(map_click)'>Show Map</button>");
		console.log("button added"); 
		$('#map_button').css('position','fixed');
		$('#map_button').css('top	','0');
		$('#map_button').css('left','0');
//		$('map_button').css('position','fixed');
//		$('map_button').css('position','fixed');


	});


	var map_click = 1;

	function map(){
		console.log(map_click);
		if(map_click%2!==0){
			document.getElementById('map_button').innerHTML = "Hide Map";
			$('a').each(function(index,value){
				positions.push($(this).offset());
				widths.push($(this).css("width"));
				heights.push($(this).css("height"));
				$('body').append("<div class='heatmap'></div>");
				//$(this).css("position",position);
			});
			
			$('.heatmap').css('opacity','.4');
			$('.heatmap').css('background-color','yellow');	
			$('.heatmap').css('position','absolute');	
			$('.heatmap').css('z-index','1');
			$('.heatmap').css('padding','0,0,0,0');
			$('.heatmap').css('margin','0,0,0,0');


			$('.heatmap').each(function(index,value){
				position = positions[index];
				height = heights[index];
				width = widths[index];
				//pos_type = position-type[index];
				$(this).css(position);
				$(this).css("height",height);
				$(this).css("width",width);	

			});
			
		}	
		else{
			document.getElementById('map_button').innerHTML = "Show Map";
			$(".heatmap").remove();		
		}
			map_click = map_click+1;
		

	}