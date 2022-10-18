class Scene2 extends Phaser.Scene 
{
    constructor() {
      super("playGame");
    }
  
    create() {

      //Imagens do cenário parallax
      this.background06 = this.add.tileSprite(0, 0, config.width, config.height, "background06");
      this.background06.setOrigin(0, 0);
      this.background06.setScale(1.5);
      this.background05 = this.add.tileSprite(0, 0, config.width, config.height, "background05");
      this.background05.setOrigin(0, 0);
      this.background05.setScale(1.5);
      this.background04 = this.add.tileSprite(0, 0, config.width, config.height, "background04");
      this.background04.setOrigin(0, 0);
      this.background04.setScale(1.5);
      this.background03 = this.add.tileSprite(0, 0, config.width, config.height, "background03");
      this.background03.setOrigin(0, 0);
      this.background03.setScale(1.5);
      this.background02 = this.add.tileSprite(0, 0, config.width, config.height, "background02");
      this.background02.setOrigin(0, 0);
      this.background02.setScale(1.5);
      this.background01 = this.add.tileSprite(0, 0, config.width, config.height, "background01");
      this.background01.setOrigin(0, 0);
      this.background01.setScale(1.5);
      //

      //HUD Score
      var graphics = this.add.graphics();
      graphics.fillStyle(0x261321, 1);
      graphics.beginPath();
      graphics.moveTo(0, 0);
      graphics.lineTo(config.width, 0);
      graphics.lineTo(config.width, 30);
      graphics.lineTo(0, 30);
      graphics.lineTo(0, 0);
      graphics.closePath();
      graphics.fillPath();
    
      //HUD Botões
      var graphics = this.add.graphics();
      graphics.fillStyle(0x261321, 1);
      graphics.beginPath();
      graphics.moveTo(0, 270);
      graphics.lineTo(config.width, 270);
      graphics.lineTo(config.width, 615);
      graphics.lineTo(270, 615);
      graphics.lineTo(0, 615);
      graphics.closePath();
      graphics.fillPath();
    

      //score
      this.score = 0;
    
      //Textos
      this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "Lixo coletado: ", 25);


      //posicionamento raposa correndo
      this.fox = this.add.sprite(202, 202, 'foxrun');
      this.fox.setScale(1.5);
      //animação raposa correnndo
      this.anims.create({
        key: "fox_run_anim",
        frames: this.anims.generateFrameNumbers("foxrun"),
        frameRate: 10,
        repeat: -1
      });
      this.fox.play("fox_run_anim");
      

      //lixos
      this.lixo01 = this.add.image(1300, 215, "lixo01");
      this.lixo01.setScale(1.5);
      this.lixo02 = this.add.image(1450, 215, "lixo02");
      this.lixo01.setScale(1.5);
      this.lixo03 = this.add.image(1550, 230, "lixo03");
      this.lixo01.setScale(1.5);

      this.cursorKeys = this.input.keyboard.createCursorKeys();
    }
  
    // 0 add the update function
    update() {
      //lixos movendo (chamando a funçao)
      this.moveLixo1(this.lixo01, -3, 0);
      this.moveLixo2(this.lixo02, -3, 0);
      this.moveLixo3(this.lixo03, -3, 0);

      //parallax
      this.background01.tilePositionX += 2;
      this.background02.tilePositionX += 1;
      this.background03.tilePositionX += 0.5;
      this.background04.tilePositionX += 0.25;
      this.background05.tilePositionX += 0.125;
      this.background06.tilePositionX += 0;

    }
    //lixos movendo funçao
    moveLixo1(lixo, speedx, speedy)
    {
      lixo.y += speedy 
      lixo.x += speedx
      if(lixo.x < -30 && this.lixo01)
      {
        lixo.x = 1350;
      }
    }
    moveLixo2(lixo, speedx, speedy)
    {
      lixo.y += speedy 
      lixo.x += speedx
      if(lixo.x < -30 && this.lixo02)
      {
        lixo.x = 1450;
      }
    }
    moveLixo3(lixo, speedx, speedy)
    {
      lixo.y += speedy 
      lixo.x += speedx
      if(lixo.x < -30 && this.lixo03)
      {
        lixo.x = 1550;
      }
    }

    MovePlayerManager()
    {
      if(this.cursorKeys.up.isDown)
      {
        this.fox = this.add.sprite(202, 202, 'foxatk');
        this.fox.setScale(1.5);
        this.anims.create
        ({
          key: "fox_atk_anim",
          frames: this.anims.generateFrameNumbers("foxatk"),
          frameRate: 10,
          repeat: 0
        });
        this.fox.play("fox_atk_anim");
      }
    }
  
}