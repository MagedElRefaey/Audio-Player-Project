var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(100,400)
ctx.lineTo(10,300)
ctx.stroke();