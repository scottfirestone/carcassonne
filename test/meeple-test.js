const assert = require('chai').assert;
const Meeple = require('../lib/meeple');

describe('Meeple', () => {
  it('returns an object', () => {
    let meeple = new Meeple("red", 1, 50, 50);
    assert.typeOf(meeple, 'object');
  });

  it('has attributes', () => {
    let meeple = new Meeple("red", 1, 50, 50);
    assert.equal(meeple.color, "red");
    assert.equal(meeple.id, 1);
    assert.equal(meeple.x, 50);
    assert.equal(meeple.y, 50);
  });
});
