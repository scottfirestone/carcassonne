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
    this.dom.addClass(`${this.player.color}-background`);
    this.dom.css('color', "white");

    /* build player name */
    this.nameDom = $('<h1>', { class: 'player-name' });
    this.nameDom.append(this.player.name);
    this.dom.append(this.nameDom);

    /* build outer score div, score text, scoring buttons div */
    this.scoreDom = $('<div>', { class: 'player-score' });
    this.scoreValueDom = $('<h3>', { class: 'player-score-value' });
    this.scoreValueDom.append(`Score: ${this.score}`);
    this.scoreButtons = $('<div>', { class: 'score-buttons'} )
    this.scoreDom.append(this.scoreValueDom);

    /* build '+' button */
    this.addToScoreDom = $('<div>', { class: 'add-to-score' });
    this.scoreButtons.append(this.addToScoreDom);

    /* build '-' button */
    this.subtractFromScoreDom = $('<div>', { class: 'subtract-from-score' });
    this.scoreButtons.append(this.subtractFromScoreDom);

    /* append '+' and '-' buttons to score buttons div */
    this.scoreDom.append(this.scoreButtons);

    /* append score buttons div to score div */
    this.dom.append(this.scoreDom);

    /* build meeple count */
    this.meepleCountDom = $('<h3>', { class: 'player-meeple-count' });
    this.meepleCountDom.append(`Meeples: ${this.remainingMeeples}`);
    this.dom.append(this.meepleCountDom);

    $('.player-info').append(this.dom);
  }

  addEventListeners() {
    this.dom.find('.add-to-score').on('click', this.addToPlayerScore.bind(this.player));
    this.dom.find('.subtract-from-score').on('click', this.subtractFromPlayerScore.bind(this.player));
  }

  addToPlayerScore(e) {
    this.addToScore();
  }

  subtractFromPlayerScore(e) {
    this.subtractFromScore();
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
