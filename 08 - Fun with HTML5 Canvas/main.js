"use strict";
var canvas = document.querySelector('canvas');
var context = null;
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    context = canvas.getContext('2d');
    if (context) {
        context.lineJoin = 'round';
        context.lineCap = 'round';
    }
}
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var width = 100;
var widthGrow = 2;
function startDrawing(e) {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
}
function endDrawing(e) {
    isDrawing = false;
}
function draw(e) {
    console.log(e);
    if (isDrawing) {
        console.log('Drawing');
        if (context) {
            context.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
            hue = hue === 360 ? 0 : hue + 2;
            widthGrow = (width === 100 || width === 0) ? -widthGrow : widthGrow;
            width = width + widthGrow;
            context.lineWidth = width;
            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(e.offsetX, e.offsetY);
            context.stroke();
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    }
    return null;
}
