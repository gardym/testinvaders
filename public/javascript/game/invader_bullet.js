function InvaderBullet() {
  var _this = new Bullet();

  _this.collide = function(other_thing) {
    if(Object.getPrototypeOf(other_thing) === Tank.prototype) {
      _this.box.make_unhittable();
      _this.active = false;
    }
  };

  return _this;

}
