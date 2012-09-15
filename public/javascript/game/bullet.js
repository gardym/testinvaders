function Bullet() {
  var width = 4;
  var height = 20;
  var velocity = 0;

  this.team = Team.Earth;
  this.active = false;
  this.box = new BoundingBox(0, 0, width, height);
  this.image = "tank_bullet";

  this.shoot = function(new_velocity, new_x, new_y) {
    velocity = new_velocity;
    this.box.x = new_x;
    this.box.y = new_y;
    this.active = true;
  };

  this.update = function(delta_time) {
    this.box.x = this.box.x + (delta_time * velocity);

    if (this.box.y < 0) {
      this.active = false;
    }
  };

  this.collide = function(other_thing) {
    if(Object.getPrototypeOf(other_thing) === Invader.prototype) {
      this.active = false;
    }
  };

  return this;
}
