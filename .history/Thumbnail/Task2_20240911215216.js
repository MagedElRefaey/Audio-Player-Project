var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(100,200)
ctx.moveTo(100,30);
ctx.lineTo(100,300)
ctx.stroke();