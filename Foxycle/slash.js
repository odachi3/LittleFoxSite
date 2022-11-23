class Slash extends Phaser.GameObjects.Sprite{
    constructor(scene){

        var x = scene.fox.x;
        var y = scene.fox.y + 16;

        super(scene, x, y, "slash");
        
        // 3.2 add to scene
        scene.add.existing(this);

        // 3.3
        this.play("slash_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.x += 250;


        // 4.2 add the beam to the projectiles group
        scene.projectiles.add(this);
    }
}