class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("background", "C:/Users/Shane/Downloads/Phaser_Assets/background.png")
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
    this.load.spriteSheet("power-up", "C:/Users/Shane/Downloads/power-up-spritesheetpng/power-up.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spriteSheet("player", "C:/Users/Shane/Downloads/part 8 - Custom Classes files/part 8 - Custom Classes/assets/spritesheets/player.png",{
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spriteSheet("beam", "C:/Users/Shane/Downloads/part 8 - Custom Classes files/part 8 - Custom Classes/assets/spritesheets/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.bitmapFont("pixelFont","C:/Users/Shane/Downloads/part 10 - Score Label files/part 10 - Score Label/assets/font/font.png", "C:/Users/Shane/Documents/GitHub/New folder/Chatting-part2-irvinese/phaser-week-1-tutorial-irvinese/font.xml")

    this.load.audio("audio_beam", "C:/Users/Shane/Downloads/part 12 - Audio files/part 12 - Audio/assets/sounds/beam.mp3")
    this.load.audio("audio_explosion", "C:/Users/Shane/Downloads/part 12 - Audio files/part 12 - Audio/assets/sounds/explosion.mp3")
    this.load.audio("audio_pickup", "C:/Users/Shane/Downloads/part 12 - Audio files/part 12 - Audio/assets/sounds/pickup.mp3")
    this.load.audio("music", "C:/Users/Shane/Downloads/Family Guy - Bird is the Word - www.youtube.com_(www.KeepVid.to).mp3")
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.Scene.start("playGame");

    this.anims.create({
      key: "ship1_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "ship2_anim",
      frames: this.anims.generateFrameNumbers("ship2"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "ship3_anim",
      frames: this.anims.generateFrameNumbers("ship3"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key:"red",
      frames:this.anims.generateFrameNumbers("power-up", {
        start: 0,
      end: 1
          }),
          frameRate: 20,
          repeat: -1
    });
    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "gray",
      frames: this.anims.generateFrameNumbers("power-up", {
        start:2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });
  }
}
