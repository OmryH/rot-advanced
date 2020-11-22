////////////////////////////////////
// Glyph //
///////////////////////////////////

let Glyph = function (chr, fgColor, bgColor) {
  this.char = chr || " ";
  this.foreground = fgColor || "white";
  this.background = bgColor || "black";
};

Glyph.prototype.getChar = function () {
  return this.char;
};

Glyph.prototype.getBackground = function () {
  return this.background;
};

Glyph.prototype.getForeground = function () {
  return this.foreground
};

////////////////////////////////////
// Tile //
///////////////////////////////////

let Tile = function (glyph) {
  this.glyph = glyph;
};

Tile.prototype.getGlyph = function () {
  return this.glyph;
};

Tile.nullTile = new Tile(new Glyph());
Tile.floorTile = new Tile(new Glyph("."));
Tile.wallTile = new Tile(new Glyph("#", "goldenrod"));
