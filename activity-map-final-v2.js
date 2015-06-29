	var clicks = [];	
	var link_id; 
	// map_click is the sequence number of the button press. Based on this number we will toggle show/hide maps
	var map_click = 1;

	$(document).ready(function(){
		var my_clicks;
		$('a').each(function(i,val){
			$(this).attr("id","link"+i);
			$('a').attr("onclick","register(this)");
	//The number of clicks are randomly generated for each link in the following lines
			my_clicks = Math.random();
			my_clicks = parseInt(my_clicks*1000);
			//console.log(my_clicks);
			clicks.push(my_clicks);
			//console.log(i);
		});
	//This will add the SHOW MAPS button to top left corner	
		$('body').append("<button id= 'map_button' onclick = 'map(map_click)'>Show Map</button>");
		console.log("button added"); 
		$('#map_button').css('position','fixed');
		$('#map_button').css('top','0');
		$('#map_button').css('left','0');
		//$('#map_button').css('z-index','2');


	});

//function to register the number of clicks on each link
	function register(ele){
			link_id = $(ele).attr("id");
			console.log(link_id);
			link_id = link_id.substring(4,6);
			clicks[link_id] += 1;
			console.log(clicks[link_id]);
		};

// function to show the number of clicks on the map
	function map_stats(){
		$('.heatmap').each(function(index,value){
			$(this).html(clicks[index]);	
		});
	}

//function to create the map
	function map(){
		var positions = [];
		var position;	

		if(map_click%2!==0){
			//Add Button to Show Stats
			$('body').append("<button id= 'map_stats_button' onclick = 'map_stats()'>Show Number of clicks</button>");
			$('#map_stats_button').css('position','fixed');
			$('#map_stats_button').css('top','20px');
			$('#map_stats_button').css('left','0');
			//$('#map_stats_button').css('z-index','2');
			console.log("button added"); 

//Toggle Hide/Show Map
			document.getElementById('map_button').innerHTML = "Hide Map";

			$('a').each(function(index,value){
//Store location of each link in an array
				positions.push($(this).offset());
				$('body').append("<div class='heatmap'></div>");
			});
			
	
			$('.heatmap').css('opacity','0');	
			$('.heatmap').css('position','absolute');	
			$('.heatmap').css('z-index','1');
			$('.heatmap').css('border-radius','40%');
			$('.heatmap').css('margin','0,0,0,0');
			$('.heatmap').css('text-align','center');
			$('.heatmap').css('font-weight','900');



			$('.heatmap').each(function(index,value){
				position = positions[index];
//Provide location of colored boxes using the array containing positions of links
				$(this).css(position);
// set color and size of div based on no. of clicks
				if(clicks[index]>500){
					$(this).css('background-color','red');
					$(this).css("height",clicks[index]/10);
					$(this).css("width",clicks[index]/10);
				}
				else if (clicks[index]>250){
					$(this).css('background-color','yellow');
					$(this).css("height",clicks[index]/10);
					$(this).css("width",clicks[index]/10);
				}
				else{
					$(this).css('background-color','blue');
					$(this).css("height",clicks[index]/10);
					$(this).css("width",clicks[index]/10);
				};	

			});


// Fade the webpage
			$("body *:not(.heatmap,#map_button,#map_stats_button)").fadeTo('slow',.4);
			$(".heatmap").fadeTo('slow',.6);
			
		}	
// If link is clicked 2nd time, map is removed from the page
		else{
			document.getElementById('map_button').innerHTML = "Show Map";
			$(".heatmap").remove();		
			$("#map_stats_button").remove();
			$("*").fadeTo('slow',1);

		}
			map_click = map_click+1;
		

	}