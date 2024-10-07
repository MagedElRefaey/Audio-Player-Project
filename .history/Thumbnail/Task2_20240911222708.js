var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.moveTo(90, 130);
ctx.lineTo(120, 130);
ctx.lineTo(120, 70);
ctx.lineTo(150, 100);
ctx.lineTo(180, 70);
ctx.lineTo(180, 130);
ctx.lineTo(80, 50);
// ctx.moveTo(100,20);
// ctx.lineTo(200,160)
// // ctx.moveTo(200,160);
// ctx.lineTo(160,)
ctx.stroke()