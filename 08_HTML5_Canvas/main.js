'use strict';

const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(evt) {
    if (!isDrawing) return;

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;     //Check out: http://mothereffinghsl.com/
    
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(evt.offsetX, evt.offsetY);
    context.stroke();
    
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
    hue = hue > 360 ? 0 : hue + 1;
    
    if (context.lineWidth >= 100 || context.lineWidth <= 20) {
        direction = !direction;
    }

    context.lineWidth = direction ? 
        context.lineWidth + 1 :
        context.lineWidth - 1;
}

canvas.addEventListener('mousedown', (evt) => {
    isDrawing = true;
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);