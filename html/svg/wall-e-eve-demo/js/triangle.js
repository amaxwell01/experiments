<!--
window.addEventListener('load', function () {
  // Get the canvas element.
  var elem = document.getElementById('triangle');
  if (!elem || !elem.getContext) {
    return;
  }
 
  // Get the canvas 2d context.
  var context = elem.getContext('2d');
  if (!context) {
    return;
  }
 
  context.fillStyle   = '#a6ca72';
  context.strokeStyle = '#acdca2';
  context.lineWidth   = 1;
 
  // Draw a right triangle.
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(20, 0);
  context.lineTo(10, 20);
  context.lineTo(0, 0);
  context.fill();
  context.stroke();
  context.closePath();
}, false)
