require("!style!css!sass!./style.scss");

var Game = require('./game');

$(document).ready(function() {
  let game = new Game();
  game.prepare();
  createRules();
  // 
  // $('#icon-audio').on("click", function() {
  //   let $audio = $('#background-audio');
  //   console.log("audio clicked", $audio);
  //   if ($audio.muted === true) {
  //     $audio.muted = false;
  //   } else {
  //     $audio.muted = true;
  //   }
  // });
});

function createRules() {
  let $modal = $('#modal-rules');
  let $btn = $('#btn-rules');
  let $span = $('#close-rules');

  $btn.on('click', function() {
    $modal.css('display', 'block');
  });

  $span.on('click', function() {
    $modal.css('display', 'none');
  });

  $("window").on('click', function(e) {
    if (event.target === modal) {
      $modal.css('display', 'none');
    }
  });
}
