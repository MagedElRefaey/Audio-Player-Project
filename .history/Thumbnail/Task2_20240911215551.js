var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(100,200)
ctx.moveTo(100,20);
ctx.lineTo(200,160)
ctx.moveTo(200,160);
ctx.lineTo(110,10)
ctx.stroke()