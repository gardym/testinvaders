function InvaderBullet() {
  var _this = new Bullet();

  _this.team = Team.Invaders;
  _this.image = "invader_bullet";

  _this.collide = function(other_thing) {
    if(Object.getPrototypeOf(other_thing) === Tank.prototype) {
      _this.active = false;
    }
  };

  return _this;

}
