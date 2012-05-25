function Tank(bullet) {
  var x = 0;
  var y = 500;
  var width = 66;
  var height = 42;

  this.position = new Position(x, y);
  this.box = new BoundingBox(this.position, width, height);
  this.active = true;

  this.update = function(dt, input) {
    this.position.x = input.mouse.x - (this.box.width / 2);

    if (input.pressed("shoot")) {
      if (!bullet.active) {
        bullet.shoot(-200, input.mouse.x, this.position.y, this);
      }
    }
  };

  this.collide = function() {
  };

  return this;
}
