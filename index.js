let canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 200;
let ctx = canvas.getContext('2d');

let isMousePress = false;
let color = document.getElementById('color');
let button = document.getElementById('button');
let radio = document.getElementById('radioSquare');
let checkbox = document.getElementById('checkbox');

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  color.value = '#000';
  checkbox.checked = false;
  radio.checked = true;
}

button.onclick = function() {
  clear();
}

canvas.onmousedown = function(event) {
  isMousePress = true;
}

canvas.onmouseup = function(event) {
  isMousePress = false;
}

canvas.onmousemove = function(event) {
  if (isMousePress === true) {
    if (checkbox.checked) {
      ctx.clearRect(event.offsetX - 5, event.offsetY - 5, 10, 10);
    } else

    if (radio.checked) {
      ctx.fillRect(event.offsetX - 5, event.offsetY - 5, 10, 10);
      ctx.fillStyle = color.value;
    } else
      ctx.arc(event.offsetX - 2, event.offsetY - 2, 4, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = color.value;
  } else false;
}