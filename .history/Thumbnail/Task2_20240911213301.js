let canvas = document.getElementById("Mycanvas");

let ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(10,10);
ctx.stroke();