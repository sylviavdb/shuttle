window.onload = function(){
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
}
