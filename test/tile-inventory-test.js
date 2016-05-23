const assert = require('chai').assert;
const TileInventory = require('../lib/tileInventory');
const Tile = require('../lib/tile');

describe('TileInventory', () => {
  it('returns an object', () => {
    let tileInventory = new TileInventory();
    assert.typeOf(tileInventory, 'object');
  });

  describe('isPositionOpen', () => {
    it('returns true if tile not in given position', () => {
      let tileInventory = new TileInventory();
      let tile1 = new Tile("image.jpg", "A", "field", "road", "field", "city", false, 100, 100);
      let tile2 = new Tile("image.jpg", "A", "field", "road", "field", "city", false, 200, 200);
      let tile3 = new Tile("image.jpg", "A", "field", "road", "field", "city", false, 300, 300);
      tileInventory.tilesPlayed = [tile1, tile2, tile3];
      assert(tileInventory.isPositionOpen(400, 400));
      assert.isFalse(tileInventory.isPositionOpen(100, 100));
    });
  });
});
