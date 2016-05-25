class PlayerInfo {
  constructor(player) {
    this.player = player;
    this.remainingMeeples = 7;
    this.dom = null;
  }

  buildDom() {
    this.dom = $('<div>', { class: 'player-pane' });
    this.dom.css('left', 100);
    this.dom.css('top', 300);
    this.dom.addClass(`${this.player.color}-background`);
    this.dom.css('color', 'white');
    this.dom.addClass('dim');
    this.buildPlayerName();
    this.buildScoreDom();
    this.buildScoreButtons();
    this.buildMeepleCount();
    $('#player-info').append(this.dom);
    this.addEventListeners();
  }

  buildPlayerName() {
    this.nameDom = $('<h1>', { class: 'player-name' });
    this.nameDom.append(this.player.name);
    this.dom.append(this.nameDom);
  }

  buildScoreDom() {
    this.scoreDom = $('<div>', { class: 'player-score' });
    this.scoreValueDom = $('<h3>', { class: 'player-score-value' });
    this.scoreValueDom.append(`Score: ${this.player.score}`);
    this.scoreButtons = $('<div>', { class: 'score-buttons'} )
    this.scoreDom.append(this.scoreValueDom);
  }

  buildScoreButtons() {
    this.addToScoreDom = $('<div>', { class: 'add-to-score' });
    this.scoreButtons.append(this.addToScoreDom);
    this.subtractFromScoreDom = $('<div>', { class: 'subtract-from-score' });
    this.scoreButtons.append(this.subtractFromScoreDom);
    this.scoreDom.append(this.scoreButtons);
    this.dom.append(this.scoreDom);
  }

  buildMeepleCount() {
    this.meepleCountDom = $('<h3>', { class: 'player-meeple-count' });
    this.meepleCountDom.append(`Meeples: ${this.remainingMeeples}`);
    this.dom.append(this.meepleCountDom);
  }

  addEventListeners() {
    this.dom.find('.add-to-score').on('click', this.addToPlayerScore.bind(this));
    this.dom.find('.subtract-from-score').on('click', this.subtractFromPlayerScore.bind(this));
  }

  addToPlayerScore(e) {
    this.player.addToScore();
    this.updateScore();
  }

  subtractFromPlayerScore(e) {
    this.player.subtractFromScore();
    this.updateScore();
  }

  updateScore() {
    this.score = this.player.score;
    this.scoreValueDom.html(`Score: ${this.score}`);
  }

  updateMeepleCount() {
    this.remainingMeeples = this.player.meepleInventory.meeplesUnplayed.length;
    this.meepleCountDom.html(`Meeples: ${this.remainingMeeples}`);
  }
}

module.exports = PlayerInfo;
