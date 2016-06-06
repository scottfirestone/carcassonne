const assert = require('chai').assert;
const Tile = require('../lib/tile');

describe('Tile', () => {
  it('returns an object', () => {
    let tile = new Tile("A", 100, 100);
    assert.typeOf(tile, 'object');
  });

  it('has attributes', () => {
    let tile = new Tile("A", 100, 100);
    assert.equal(tile.type, "A");
    assert.equal(tile.x, 100);
    assert.equal(tile.y, 100);
  });

  it('has x and y that both default to zero', () => {
    let tile = new Tile("A");
    assert.equal(tile.x, 0);
    assert.equal(tile.y, 0);
  });
});
