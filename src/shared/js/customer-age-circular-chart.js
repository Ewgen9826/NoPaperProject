var myCanvas = document.getElementById("customer-age-circular-chart");
myCanvas.width = 380;
myCanvas.height = 380;
var ctx = myCanvas.getContext("2d");
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX,centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.closePath();
	ctx.fill();
}
// Данные статистики
var myVinyls = {
	"до 20 лет": 40,
	"20 - 30 лет": 10,
	"30 - 40 лет": 10,
	"40 - 50 лет": 15,
	"от 50 лет": 20
};
var Piechart = function(options){
	this.options = options;
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext("2d");
	this.colors = options.colors;
	this.draw = function(){
			var total_value = 0;
			var color_index = 0;
			for (var categ in this.options.data){
					var val = this.options.data[categ];
					total_value += val;
			}
			var start_angle = 0;
			for (categ in this.options.data){
					val = this.options.data[categ];
					var slice_angle = 2 * Math.PI * val / total_value;
					drawPieSlice(
							this.ctx,
							this.canvas.width/2,
							this.canvas.height/2,
							Math.min(this.canvas.width/2,this.canvas.height/2),
							start_angle,
							start_angle+slice_angle,
							this.colors[color_index%this.colors.length]
					);
					start_angle += slice_angle;
					color_index++;
			}
			start_angle = 0;
for (categ in this.options.data){
    val = this.options.data[categ];
    slice_angle = 2 * Math.PI * val / total_value;
    var pieRadius = Math.min(this.canvas.width/2,this.canvas.height/2);
    var labelX = this.canvas.width/2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
    var labelY = this.canvas.height/2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle/2);
 
    if (this.options.doughnutHoleSize){
        var offset = (pieRadius * this.options.doughnutHoleSize ) / 2;
        labelX = this.canvas.width/2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle/2);
        labelY = this.canvas.height/2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle/2);               
    }
 
    var labelText = Math.round(100 * val / total_value);
    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 20px Arial";
    this.ctx.fillText(labelText+"%", labelX,labelY);
    start_angle += slice_angle;
}

	}
	if (this.options.legend){
		color_index = 0;
		var legendHTML = "";
		for (categ in this.options.data){
				legendHTML += "<div><span style='display:inline-block;  margin:7px; width:25px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
		}
		this.options.legend.innerHTML = legendHTML;
}
}
var myLegend = document.getElementById("myLegend");
 
var myDougnutChart = new Piechart(
    {
        canvas:myCanvas,
        data:myVinyls,
        colors:['#2BA198','#F0B044','#D9E029','#E66032','#87C63E'],
        legend:myLegend
    }
);
myDougnutChart.draw();
