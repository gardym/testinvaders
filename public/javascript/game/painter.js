function Painter(context) {

  var find_image = function(id) {
    return document.getElementById(id);
  };

  this.images = {
    tank: find_image("img_tank"),
    invader: find_image("img_invader"),
    tank_bullet: find_image("img_tank_bullet"),
    invader_bullet: find_image("img_invader_bullet"),

    invader_red: find_image("img_invader_red"),
    invader_blue: find_image("img_invader_blue"),
    invader_yellow: find_image("img_invader_yellow"),
    invader_orange: find_image("img_invader_orange")
  };

  this.draw = function(thing) {
    if(thing.image) {
      context.drawImage(this.images[thing.image], thing.box.x, thing.box.y);
    }
  };

  this.clear = function() {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  };

  return this;
}
