/*
 *
 * As for over here,
 * it's much harder to say.
 *
 */

function Init() {
  atom.input.bind(atom.button.LEFT, "shoot");

  var painter = new Painter(atom.context);
  var things = [];

  var bullet = new Bullet();
  var tank = new Tank(bullet);
  things.push(bullet);
  things.push(tank);

  var invaders = [];
  var column_offset = 70;
  var row_offset = 60;
  for(var row = 0; row < 5; row++) {
    for(var col = 0; col < 10; col++) {
      var x = col * column_offset;
      var y = row * row_offset;

      var invader_bullet = new InvaderBullet();
      var invader = new Invader(x, y, invader_bullet);

      invaders.push(invader);
      things.push(invader_bullet);
      things.push(invader);
    }
  }

  var swarm = new Swarm(invaders, atom.canvas.width);
  things.push(swarm);

  var game = new Game(painter, things);

  window._game = game;

  game.run();
}
