// Canvas 2D basics

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'tomato';
// ctx.fillRect(10, 10, 80, 40);
// Canvas setup
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Draw rectangle
ctx.fillStyle = 'tomato';
ctx.fillRect(50, 50, 150, 100);

// Draw circle
ctx.fillStyle = 'steelblue';
ctx.beginPath();
ctx.arc(400, 150, 60, 0, Math.PI * 2);
ctx.fill();

// Draw line
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(700, 300);
ctx.stroke();

// Draw text
ctx.fillStyle = 'black';
ctx.font = '24px Arial';
ctx.fillText('Canvas 2D Basics', 300, 500);

// Draw triangle
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(500, 500);
ctx.lineTo(300, 500);
ctx.closePath();
ctx.fill();