const assert = require('chai').assert;
const MeepleInventory = require('../lib/meepleInventory');

describe('MeepleInventory', () => {
  it('returns an object', () => {
    let meepleInventory = new MeepleInventory("red");
    assert.typeOf(meepleInventory, 'object');
  });

  it('has a color', () => {
    let meepleInventory = new MeepleInventory("red");
    assert.equal(meepleInventory.color, "red");
  });
});
