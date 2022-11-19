class Slash extends Phaser.GameObjects.Sprite{
    constructor(scene){

        var x = scene.fox.x;
        var y = scene.fox.y;

        super(scene, x, y, "slash");
        
    }
}