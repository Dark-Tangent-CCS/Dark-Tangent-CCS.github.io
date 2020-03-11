var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xFFFF00,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('duck', 'images.jpeg');
}

function create ()
{
  var sprite = this.add.sprite(40, 30, 'duck').setInteractive();

    sprite.on('pointerdown', function (pointer) {
        console.log("why");
        quack();

    });

  //this.duck = this.add.image(400, 300, 'duck');
  // this.duck.setScale(0.25);
}

function update ()
{
}
function quack()
{
  var audio = new Audio('Duck-quack.mp3');
  audio.play();
}
