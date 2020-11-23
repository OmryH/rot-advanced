let Entity = function (properties) {
  properties = properties || {};
  Glyph.call(this, properties);
  this.name = properties['name'] || '';
  this.x = properties['x'] || 0;
  this.y = properties['y'] || 0;
  this.attachedMixins = {};
  let mixins = properties['mixins'] || [];
  for (let i = 0; i < mixins.length; i++) {
    for (let key in mixins[i]) {
      if (key !== 'init' && key !== 'name' && !this.hasOwnProperty(key)) {
        this[key] = mixins[i][key];
      }
    }
    this.attachedMixins[mixins[i].name] = true;
    if (mixins[i].init) {
      mixins[i].init.call(this, properties);
    }
  }
};

Entity.prototype.hasMixin = function(obj) {
  if (typeof obj === 'object') {
    return this.attachedMixins[obj.name];
  } else {
    return this.attachedMixins[name];
  }
};

Entity.prototype.setName = function (name) {
  this.name = name;
};

Entity.prototype.setX = function (x) {
  this.x = x;
};

Entity.prototype.setY = function (y) {
  this.y = y;
};

Entity.prototype.getName = function () {
  return this.name;
};

Entity.prototype.getX = function () {
  return this.x;
};

Entity.prototype.getY = function () {
  return this.y;
};
