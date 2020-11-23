let Mixins = {};

Mixins.Moveable = {
  name: "Moveable",
  tryMove: function (x, y, map) {
    let tile = map.getTile(x, y);
    if (tile.isWalkable()) {
      this.x = x;
      this.y = y;
      return true;
    } else if (this.isDiggable()) {
      map.dig(x, y);
      return true;
    }
    return false;
  }
};
