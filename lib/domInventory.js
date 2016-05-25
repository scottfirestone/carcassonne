// Define all existing DOM jquery objects
let domItems = {
  buttonCreateGame: $('#btn-create-game'),
  buttonBeginGame: $('#btn-begin-game'),
  buttonPlaceTile: $('#btn-place-tile'),
  buttonPlaceMeeple: $('#btn-place-meeple'),
  buttonSkipMeeple: $('#btn-skip-meeple'),
  inputPlayerName1: $('#input-player-name-1'),
  inputPlayerName2: $('#input-player-name-2')
};

function domInventory (key) {
  return domItems[key] || null;
}

module.exports = {
  dom: domInventory
};
