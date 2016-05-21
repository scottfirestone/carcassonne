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

    this.scoreDom = $('<h3>', { class: 'player-score' });
    this.scoreDom.append(`Score: ${this.score}`);
    this.dom.append(this.scoreDom);

    this.meepleCountDom = $('<h3>', { class: 'player-meeple-count' });
    this.meepleCountDom.append(`Meeples: ${this.remainingMeeples}`);
    this.dom.append(this.meepleCountDom);

    $('.player-info').append(this.dom);
  }

  buildName(name) {

  }

  buildScore(score) {

  }

  buildMeepleCount(count) {

  }
}

module.exports = PlayerInfo;
