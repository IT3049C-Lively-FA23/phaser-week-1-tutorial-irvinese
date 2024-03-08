class Beam extends Phaser.GameObjects.Sprites{
    constructor(scene){
        var x = scene.player.x;
        var y = scene.player.y;

        super(scene, x, y, "beam");
        scene.projectiles.add(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
    }

    update(){
        if(this.y < 32){
            this.destroy();
        }
    }






}
