var canvas = document.getElementById("Mycanvas");

var ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(90, 130); // Bottom left
ctx.lineTo(95, 25);  // Left top
ctx.lineTo(150, 80); // Middle peak
ctx.lineTo(205, 25); // Right top
ctx.lineTo(210, 130); // Bottom right
ctx.closePath();
ctx.stroke();

// Draw the 3D effect
ctx.beginPath();
ctx.moveTo(90, 130); // Bottom left
ctx.lineTo(100, 140); // 3D left depth start
ctx.lineTo(105, 55);  // 3D left depth end
ctx.lineTo(95, 25);  // Connect to top left

ctx.moveTo(150, 80); // Middle peak
ctx.lineTo(160, 90); // 3D middle peak depth start
ctx.lineTo(205, 35); // 3D middle peak depth end
ctx.lineTo(205, 25); // Connect to top right

ctx.moveTo(100, 140); // 3D left depth end
ctx.lineTo(205, 140); // Connect depth ends

ctx.moveTo(160, 90); // 3D middle peak depth end
ctx.lineTo(205, 130); // Connect to bottom right

ctx.stroke();
// ctx.moveTo(100,20);
// ctx.lineTo(200,160)
// // ctx.moveTo(200,160);
// ctx.lineTo(160,)
ctx.stroke()