class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // Use forward slashes in file paths
    this.load.spriteSheet("ship", "C:/Users/Shane/Downloads/spritesheets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spriteSheet("ship", "C:/Users/Shane/Downloads/Phaser_Assets/ship.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spriteSheet("ship2", "C:/Users/Shane/Downloads/Phaser_Assets/ship2.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spriteSheet("ship3", "C:/Users/Shane/Downloads/Phaser_Assets/ship3.png", {
      frameWidth: 16,
      frameHeight: 16
    });
  }

  this.load.spriteSheet{"ship", "C:\Users\Shane\Downloads\spritesheets\spritesheets\ship.png"}

  create() {
    this.add.text(20, 20, "Loading game...");
  }
}
