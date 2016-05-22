// score
// player name
// # of meelples left
// everything in the color of that player

class PlayerInfo {
  constructor(player) {
    this.player = player;
    this.name = player.name;
    this.score = player.score;
    this.remainingMeeples = this.player.meepleInventory.meeplesUnplayed.length;
    this.dom = null;

    this.buildDom();
    this.addEventListeners();
  }

  buildDom() {
    this.dom = $('<div>', { class: 'player-pane' });
    this.dom.css('left', 100);
    this.dom.css('top', 300);
    this.dom.css('background-color', this.player.color);
    this.dom.css('color', "white");

    this.nameDom = $('<h1>', { class: 'player-name' });
    this.nameDom.append(this.player.name);
    this.dom.append(this.nameDom);

    this.scoreDom = $('<div>', { class: 'player-score' });
    this.scoreValueDom = $('<h3>', { class: 'player-score-value' });
    this.scoreValueDom.append(`Score: ${this.score}`);
    this.scoreButtons = $('<div>', { class: 'score-buttons'} )
    this.scoreDom.append(this.scoreValueDom);

    this.addToScoreDom = $('<button>', { class: 'add-to-score', type: 'button' });
    this.addToScoreDom.append('+');
    this.scoreButtons.append(this.addToScoreDom);

    this.subtractFromScoreDom = $('<button>', { class: 'subtract-from-score' });
    this.subtractFromScoreDom.append('-');
    this.scoreButtons.append(this.subtractFromScoreDom);
    this.scoreDom.append(this.scoreButtons);

    this.dom.append(this.scoreDom);

    this.meepleCountDom = $('<h3>', { class: 'player-meeple-count' });
    this.meepleCountDom.append(`Meeples: ${this.remainingMeeples}`);
    this.dom.append(this.meepleCountDom);

  }

  addEventListeners() {
    this.dom.find('.add-to-score').on('click', this.addToPlayerScore.bind(this.player));

    $('.subtract-from-score').on('click', this.subtractFromPlayerScore);

    $('.player-info').append(this.dom);

  }

  buildName(name) {

  }

  addToPlayerScore(e) {
    this.addToScore();
  }

  updateScore() {
    this.score = this.player.score;
    this.scoreValueDom.html(`Score: ${this.score}`)
  }

  updateMeepleCount(count) {
    this.remainingMeeples = this.player.meepleInventory.meeplesUnplayed.length;
    this.meepleCountDom.html(`Meeples: ${this.remainingMeeples}`);
  }
}

module.exports = PlayerInfo;
