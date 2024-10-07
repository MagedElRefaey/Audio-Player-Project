var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.stroke()