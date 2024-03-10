class explosion extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, c, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
    }
}