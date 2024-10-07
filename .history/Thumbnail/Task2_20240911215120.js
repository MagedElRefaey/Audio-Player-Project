var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(100,200)
ctx.lineTo(100,2)
ctx.stroke();