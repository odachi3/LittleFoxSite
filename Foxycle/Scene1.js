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
    
        //lixos
        this.load.image("lixo01", "./assets/images/lixo01.png");
        this.load.image("lixo02", "./assets/images/lixo02.png");
        this.load.image("lixo03", "./assets/images/lixo03.png");

        //raposa spritesheet (run, atk e slash)
        this.load.spritesheet("foxrun", "./assets/spritesheets/fox_run_spritesheet.png",
        {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet("foxatk", "./assets/spritesheets/fox_atk_spritesheet.png",
        {
            frameWidth: 80,
            frameHeight: 64
        });
        this.load.spritesheet("slash", "./assets/spritesheets/slash_spritesheet.png",
        {
            frameWidth: 45,
            frameHeight: 10
        });
        this.load.spritesheet("trofeu", "./assets/spritesheets/trofeu_spritesheet.png",
        {
            frameWidth: 128,
            frameHeight: 192
        });
        this.load.spritesheet("borda", "./assets/spritesheets/borda_spritesheet.png",
        {
            frameWidth: 250,
            frameHeight: 20
        });
        
        //hud geral
        this.load.image("hud", "./assets/images/hud.png");
        this.load.image("botao01", "./assets/images/botao01.png");
        this.load.image("botao02", "./assets/images/botao02.png");
        this.load.image("botao03", "./assets/images/botao03.png");
        this.load.image("botao04", "./assets/images/botao04.png");
        this.load.image("botao05", "./assets/images/botao05.png");
        this.load.image("botao06", "./assets/images/botao06.png");
        this.load.image("plank", "./assets/images/plank.png");
        //this.load.image("borda", "./assets/images/borda.png");
        this.load.image("trofeu", "./assets/images/trofeu.png");
    }

    create()
    {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
        //animação raposa correnndo,atk e slash
      this.anims.create({
        key: "fox_run_anim",
        frames: this.anims.generateFrameNumbers("foxrun"),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
          key: "fox_atk_anim",
          frames: this.anims.generateFrameNumbers("foxatk"),
          frameRate: 10,
          repeat: 0
      });
      this.anims.create({
          key: "slash_anim",
          frames: this.anims.generateFrameNumbers("slash"),
          frameRate: 20,
          repeat: 0
      });
      this.anims.create({
        key: "trofeu_anim",
        frames: this.anims.generateFrameNumbers("trofeu"),
        frameRate: 20,
        repeat: 0
    });
    this.anims.create({
        key: "borda06_anim",
        frames: this.anims.generateFrameNumbers("borda"),
        frameRate: 100,
        repeat: 0
      });
    }
}