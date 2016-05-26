// Define all existing DOM jquery objects
let domItems = {
  headerLogo: $('#header-logo'),
  sectionPlayerInput: $('#section-player-input'),
  sectionGame: $('#section-game'),
  buttonCreateGame: $('#btn-create-game'),
  buttonBeginGame: $('#btn-begin-game'),
  buttonPlaceTile: $('#btn-place-tile'),
  buttonPlaceMeeple: $('#btn-place-meeple'),
  buttonSkipMeeple: $('#btn-skip-meeple'),
  inputPlayerName1: $('#input-player-name-1'),
  inputPlayerName2: $('#input-player-name-2'),
  inputPlayerName3: $('#input-player-name-3'),
  inputPlayerName4: $('#input-player-name-4'),
  inputPlayerName5: $('#input-player-name-5'),
  gameBoard: $('#board')
};

function domInventory (key) {
  return domItems[key] || null;
}

module.exports = {
  dom: domInventory
};
