$(document).ready(function() {
  $('.confirm-tile').on('click', placeTile);
})

function placeTile() {
  var tile = $(document).find('.current-tile');
  tile.removeClass('.current-tile');
  tile.draggable('disable');
  $('.rotate-tile').remove();
  pullRandomTile();
}

function rotateTile() {
  var tile = $(this).parents('.current-tile');
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
}

function pullRandomTile() {
  var tileImage = "lib/images/tiles/0tile" + (Math.floor(Math.random() * 24) + 1) + ".jpg";
  renderTile(tileImage);
}

function renderTile(tileImage) {
  var $tileDiv = $("<div class='tile current-tile'><div class='rotate-tile'></div></div>");
  var placeHolder = document.getElementById('new-tile-box');
  $(placeHolder).append($tileDiv);
  $tileDiv.css('background-image', "url('"+ tileImage +"')")
  $tileDiv.draggable({ grid: [100, 100] });
  $('.rotate-tile').on('click', rotateTile);
}

pullRandomTile();
