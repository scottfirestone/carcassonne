function Tile(image, type, top, right, bottom, left, pennant, x, y) {
  this.image = image;
  this.type = type;
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
  this.pennant = pennant;
  this.x = x;
  this.y = y;
}

module.exports = Tile;
