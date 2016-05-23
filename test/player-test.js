const assert = require('chai').assert;
const Player = require('../lib/player');

describe('Player', () => {
  it('returns an object', () => {
    let player = new Player('name', 'color');
    assert.typeOf(player, 'object');
  });

  describe('addToScore', function() {
    it('increments the score', function() {
      var player = new Player('name', 'color');
      assert.equal(player.score, 0);
      player.addToScore();
      assert.equal(player.score, 1);
    });
  });

  describe('subtractFromScore', function() {
    it('decrements the score, does not go below zero', function() {
      var player = new Player('name', 'color');
      player.addToScore();
      assert.equal(player.score, 1);
      player.subtractFromScore();
      assert.equal(player.score, 0);
      player.subtractFromScore();
      assert.equal(player.score, 0);
    });
  });
});
