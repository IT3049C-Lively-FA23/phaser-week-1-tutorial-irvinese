const { Phaser } = require("./phaser.min");

class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
    this.background.setOrigin(0, 0);

    this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
    this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");

    this.powerUps = this.physics.add.group();

    var maxObjects = 4;
    for(var i = 0; i <= maxObjects; i++){
      var powerUp = this.physics.add.sprite(16,16, "power-up");
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0,0, game.config.width, game.config.heigt);

      if (Math.random() > 0.5){
        powerUp.play("red");
      }else{
        powerUp.play("grey");
      }

      powerUp.serVelocity(100, 100);
      powerUp.setColliderWorldBounds(true);
      powerUp.setBounce(1);
    }

    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

    this.add.text(20, 20, "Playing game", { font: "25px Arial", fill: "yellow" });

    this.player = this.physics.sprite(config.width / 2 - 8, config.height - 64, "player");
    this.player.play("thrust");
    this.cursorKeys = this.inpiut.keyboard.createCursorKeys();
    this.player.setColliderWorldBounds(true);
    this.spacebar = this.inpiut.keyboard.addKey(Phaser.Input.keyboard.KeyCodes.SPACE);
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);

    this.background.tilePositionY -= 0.5;

    this.movePlayerManager();

    if(Phaser.Input.keyboard.justDown(this.spacebar)){
      console.log("fire");
    }
  }

  movePlayerManager(){
    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.right.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.down.isDown){
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }


  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }
}
