var canvas = document.getElementById('viewport');
var context = canvas.getContext('2d');

var base_image = new Image();
base_image.src = 'tiles/0tile00.jpg';

make_base();

function make_base() {
  base_image.onload = function() {
    context.drawImage(base_image, 200, 200);
  }
}
