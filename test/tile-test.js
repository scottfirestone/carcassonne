const assert = require('chai').assert;
const Tile = require('../lib/tile');

describe('Tile', () => {
  it('returns an object', () => {
    let tile = new Tile("image.jpg", "A", "field", "road", "field", "city", false, 100, 100);
    assert.typeOf(tile, 'object');
  });

  it('has attributes', () => {
    let tile = new Tile("image.jpg", "A", "field", "road", "field", "city", false, 100, 100);
    assert.equal(tile.image, "image.jpg");
    assert.equal(tile.type, "A");
    assert.equal(tile.top, "field");
    assert.equal(tile.right, "road");
    assert.equal(tile.bottom, "field");
    assert.equal(tile.left, "city");
    assert.equal(tile.pennant, false);
    assert.equal(tile.x, 100);
    assert.equal(tile.y, 100);
  });

  it('has x and y that both default to zero', () => {
    let tile = new Tile("image.jpg", "A", "field", "road", "field", "city", false);
    assert.equal(tile.x, 0);
    assert.equal(tile.y, 0);
  });
});
