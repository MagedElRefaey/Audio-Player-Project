var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(500,20);
ctx.lineTo(100,100)
ctx.lineTo(100,100)
ctx.stroke();