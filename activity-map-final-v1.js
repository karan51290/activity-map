	var clicks = [];	
	var link_id; 

	function register(ele){
			link_id = $(ele).attr("id");
			console.log(link_id);
			link_id = link_id.substring(4,6);
			clicks[link_id] += 1;
			console.log(clicks[link_id]);
		};

	$(document).ready(function(){
		var my_clicks;
		$('a').each(function(i,val){
			$(this).attr("id","link"+i);
			$('a').attr("onclick","register(this)");
			my_clicks = Math.random();
			my_clicks = parseInt(my_clicks*1000);
			console.log(my_clicks);
			clicks.push(my_clicks);
		});
		$('body').append("<button id= 'map_button' onclick = 'map(map_click)'>Show Map</button>");
		console.log("button added"); 
		$('#map_button').css('position','fixed');
		$('#map_button').css('top','0');
		$('#map_button').css('left','0');


	});


	var map_click = 1;

	function map(){
		var positions = [];
		var position;
		var widths = [];
		var width;
		var heights = [];
		var height;
	

		if(map_click%2!==0){
			document.getElementById('map_button').innerHTML = "Hide Map";
			$('a').each(function(index,value){
				positions.push($(this).offset());
				widths.push($(this).css("width"));
				heights.push($(this).css("height"));
				$('body').append("<div class='heatmap'></div>");
			});
			
			$('.heatmap').css('opacity','0');	
			$('.heatmap').css('position','absolute');	
			$('.heatmap').css('z-index','1');
			$('.heatmap').css('border-radius','10px');
			$('.heatmap').css('margin','0,0,0,0');


			$('.heatmap').each(function(index,value){
				position = positions[index];
				height = heights[index];
				width = widths[index];

				$(this).css(position);
				$(this).css("height",height);
				$(this).css("width",width);
				// set color of div based on no. of clicks
				if(clicks[index]>500){
					$(this).css('background-color','red');
				}
				else if (clicks[index]>250){
					$(this).css('background-color','yellow');
				}
				else{
					$(this).css('background-color','blue');
				};	

			});



			$("body *:not(.heatmap)").fadeTo('slow',.8);
			$(".heatmap").fadeTo('slow',1);
			
		}	
		else{
			document.getElementById('map_button').innerHTML = "Show Map";
			$(".heatmap").remove();		
			$("*").fadeTo('slow',1);

		}
			map_click = map_click+1;
		

	}