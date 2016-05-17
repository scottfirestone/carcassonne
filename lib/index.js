$(document).ready(function() {

  $('.second-tile').draggable({ grid: [100, 100] });

  $('.rotate-tile').on('click', rotateTile);

})


  function rotateTile() {
    var tile = $(this).parents('.second-tile');
    if (tile.hasClass('rotate90')) {
      tile.removeClass('rotate90');
      tile.addClass('rotate180');
    } else if (tile.hasClass('rotate180')) {
      tile.removeClass('rotate180');
      tile.addClass('rotate270')
    } else if (tile.hasClass('rotate270')) {
      tile.removeClass('rotate270');
    } else {
      tile.addClass('rotate90');
    }
    console.log('tile', tile);
  }

//
// function pullRandomTile() {
//   var tile = new Image();
//   tile.src = "/tiles/0tile" + (Math.floor(Math.random() * 24) + 1) + ".jpg";
//   renderNewTile(tile);
// }
//
// function renderNewTile(tile) {
//   tile.onload = function() {
//     context.drawImage(tile, 450, 0);
//   }
// }
// pullRandomTile();
