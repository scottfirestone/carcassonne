const assert = require('chai').assert;
const TileInventory = require('../lib/tileInventory');

describe('TileInventory', () => {
  it('returns an object', () => {
    let tileInventory = new TileInventory();
    assert.typeOf(tileInventory, 'object');
  });
});
