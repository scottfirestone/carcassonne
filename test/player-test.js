const assert = require('chai').assert;
const jsdom = require('jsdom');
const Player = require('../lib/player');
const window = jsdom.jsdom().defaultView;

describe('Player', () => {

  it('returns an object', () => {
    jsdom.jQueryify(window, "../js/vendor/jquery.min.js", () => {

      let player = new Player('name', 'color');
      assert.typeOf(player, 'object');
    });
  });
});
