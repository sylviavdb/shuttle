window.onload = function (){
var lijnGrafiek = new CanvasJS.Chart("chartContainer3", {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: "Temperature shuttle",
			fontFamily: "Arial",
		},
		axisY:{
			includeZero: false
		}, 
		data: [{        
			type: "line",  
			fontFamily: "Arial",     
			dataPoints: [
				{ y: 20 },
				{ y: 25},
				{ y: 29, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
				{ y: 27 },
				{ y: 27 },
				{ y: 28 },
				{ y: 26 },
				{ y: 26 },
				{ y: 19 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
				{ y: 22 },
				{ y: 22 },
				{ y: 21 }
			]
		}]
	});
	lijnGrafiek.render();
  }
