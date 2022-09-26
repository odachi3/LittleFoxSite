class Scene1 extends Phaser.Scene 
{
    constructor()
    {
        super("bootGame");
    }

    preload()
    {
        //Fonte e textos
        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

        //cenario parallax
        this.load.image("background01", "./assets/images/parallax01.png");
        this.load.image("background02", "./assets/images/parallax02.png");
        this.load.image("background03", "./assets/images/parallax03.png");
        this.load.image("background04", "./assets/images/parallax04.png");
        this.load.image("background05", "./assets/images/parallax05.png");
        this.load.image("background06", "./assets/images/parallax06.png");

        //raposa spritesheet
        this.load.spritesheet("fox", "./assets/spritesheets/fox_run_spritesheet.png",
        {
            frameWidth: 64,
            frameHeight: 64
        });

    }

    create()
    {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame")
    }
}