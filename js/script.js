window.onload = function () {

	var staafDiagram = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title:{
			text: "Snickers vs Mars-supply",
			fontFamily: "Arial",
		},	
		axisY: {
			title: "Quantity",
			titleFontColor: "#4F81BC",
			lineColor: "#4F81BC",
			labelFontColor: "#4F81BC",
			tickColor: "#4F81BC",
			fontFamily: "Arial",
		},
		axisY2: {
			title: "Quantity",
			titleFontColor: "#003333",
			lineColor: "#003333",
			labelFontColor: "#003333",
			tickColor: "#003333",
			fontFamily: "Arial",
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor:"pointer",
			itemclick: toggleDataSeries
		},
		data: [{
			type: "column",
			name: "Snickers",
			legendText: "Snickers",
			showInLegend: true, 

			dataPoints:[
				{ label: "Monday", y: 2600 },
				{ label: "Tuesday", y: 2400 },
				{ label: "Wednesday", y: 1800 },
				{ label: "Thursday", y: 1650 },
				{ label: "Friday", y: 1400 },
				{ label: "Saturday", y: 1000 },
				{ label: "Sunday", y: 900}
			]
		},
		{
			type: "column",	
			name: "Mars",
			legendText: "Mars",
			axisYType: "secondary",
			showInLegend: true,
			color: "#003333",
			markerColor: "#003333",
			lineColor: "#003333",
			dataPoints:[
				{ label: "Monday", y: 2600 },
				{ label: "Tuesday", y: 2450 },
				{ label: "Wednesday", y: 2375 },
				{ label: "Thursday", y: 1980},
				{ label: "Friday", y: 1550 },
				{ label: "Saturday", y: 1200 },
				{ label: "Sunday", y: 680}
			]
		}]
	});
	staafDiagram.render();

	function toggleDataSeries(e) {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		staafDiagram.render();
	}


// begin datavisual2//

	var donutGrafiek = new CanvasJS.Chart("chartContainer2", {
		animationEnabled: true,
		title:{
			text: "Travellers",
			horizontalAlign: "center",
			fontFamily: "Arial",
		},
		data: [{
			type: "doughnut",
			startAngle: 60,
			//innerRadius: 60,
			indexLabelFontSize: 12,
			indexLabel: "{label} - #percent%",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 53, label: "Women" },
				{ y: 40, label: "Men", color:"#003333" },
				{ y: 10, label: "Children", color: "darkgrey" }
			]
		}]
	});
	donutGrafiek.render();

	//begin datavisual3

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

