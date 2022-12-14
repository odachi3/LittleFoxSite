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
      graphics.lineTo(config.width, 725);
      graphics.lineTo(270, 725);
      graphics.lineTo(0, 725);
      graphics.closePath();
      graphics.fillPath();

      //HUD menu
      var graphics = this.add.graphics();
      graphics.fillStyle(0x4c3339, 1);
      graphics.beginPath();
      graphics.moveTo(850, 300);
      graphics.lineTo(850, 300);
      graphics.lineTo(850, 700);
      graphics.lineTo(1450, 700);
      graphics.lineTo(1450, 300);
      graphics.closePath();
      graphics.fillPath();
      
      
      //botoes

      //botao 01
      var botao01 = this.add.sprite(70, 350, "botao01");
      botao01.setScale(1.5);
      botao01.setInteractive()
      var borda01 = this.add.sprite(260, 375, "borda");
      this.plank = this.add.sprite(260, 330, "plank"); 

      botao01.on('pointerdown', function(pointer){

        borda01.play('borda01_anim');
      })
      botao01.on('pointerover', function(){

        botao01.setTint(0xa37f5f);
      });
      botao01.on('pointerout', function(){

        botao01.clearTint();
        
      });

      //botao 02
      var botao02 = this.add.sprite(70, 500, "botao02");
      botao02.setScale(1.5);
      botao02.setInteractive()
      var borda02 = this.add.sprite(260, 525, "borda");
      this.plank = this.add.sprite(260, 475, "plank");

      botao02.on('pointerdown', function(pointer){

        borda02.play('borda02_anim');
      })
      botao02.on('pointerover', function(){

        botao02.setTint(0xa37f5f);

      });
      botao02.on('pointerout', function(){

        botao02.clearTint();
        
      });

      //botao 03
      var botao03 = this.add.sprite(70, 650, "botao03");
      botao03.setScale(1.5);
      botao03.setInteractive()
      var borda03 = this.add.sprite(260, 675, "borda");
      this.plank = this.add.sprite(260, 625, "plank");

      botao03.on('pointerdown', function(pointer){

        borda03.play('borda03_anim');
      })
      botao03.on('pointerover', function(){

        botao03.setTint(0xa37f5f);

      });
      botao03.on('pointerout', function(){

        botao03.clearTint();
        
      });

      //botao 04
      var botao04 = this.add.sprite(470, 350, "botao04");
      botao04.setScale(1.5);
      botao04.setInteractive()
      var borda04 = this.add.sprite(660, 375, "borda");
      this.plank = this.add.sprite(660, 325, "plank");

      botao04.on('pointerdown', function(pointer){

        borda04.play('borda04_anim');
      })
      botao04.on('pointerover', function(){

        botao04.setTint(0xa37f5f);

      });
      botao04.on('pointerout', function(){

        botao04.clearTint();
        
      });

      //botao 05
      var botao05 = this.add.sprite(470, 500, "botao05");
      botao05.setScale(1.5);
      botao05.setInteractive()
      var borda05 = this.add.sprite(660, 525, "borda");
      this.plank = this.add.sprite(660, 475, "plank");

      botao05.on('pointerdown', function(pointer){

        borda05.play('borda05_anim');
      })
      botao05.on('pointerover', function(){

        botao05.setTint(0xa37f5f);

      });
      botao05.on('pointerout', function(){

        botao05.clearTint();
        
      });

      //botao 06
      var botao06 = this.add.sprite(470, 650, "botao06").setInteractive();
      botao06.setScale(1.5);
      var borda06 = this.add.sprite(660, 675, "borda");
      this.plank = this.add.sprite(660, 625, "plank");

      botao06.on('pointerdown', function(pointer){

        if(this.score >= 30){
          trofeu.play('trofeu_anim');
          borda06.play('borda06_anim');
          this.score -= 30;
          this.scoreLabel.text = "Fox Coins: " + this.score; 
        }
      }, this)
      botao06.on('pointerover', function(){

        botao06.setTint(0xa37f5f);

      });
      botao06.on('pointerout', function(){

        botao06.clearTint();
        
      });
      
      var trofeu = this.add.sprite(1375, 600, "trofeu");

      //lixos
      this.lixo01 = this.add.image(1300, 215, "lixo01").setInteractive();
      this.lixo01.setScale(1.5);
      this.lixo02 = this.add.image(1650, 205, "lixo02").setInteractive();
      this.lixo02.setScale(1.125);
      this.lixo03 = this.add.image(1525, 230, "lixo03").setInteractive();

      this.lixos = this.physics.add.group();
      this.lixos.add(this.lixo01);
      this.lixos.add(this.lixo02);
      this.lixos.add(this.lixo03);

      //this.physics.add.overlap(this.projectiles, this.lixos)
      
      //variavel fox
      var fox = this.add.sprite(202, 202)
      var shape = new Phaser.Geom.Circle(36, 35, 35);
      fox.setInteractive(shape, Phaser.Geom.Circle.Contains);
      fox.setOrigin(0.5, 0.5);
      fox.play('fox_run_anim');
      fox.setScale(1.5);

      this.projectiles = this.add.group();
      
      //clique na raposa (animaçao atk e slash)
      fox.on('pointerdown', function (pointer) {
        /*if (fox.anims.getName() === 'fox_run_anim')
        {
          fox.playAfterRepeat('fox_atk_anim');
          fox.chain(['fox_run_anim']);
        }*/
        this.shootSlash();
      }, this);

      this.fox = fox;
      
      this.physics.add.overlap(this.projectiles, this.lixos, this.hitLixo, null, this);
    
      //score
      this.score = 0;
    
      //Textos
      this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "Fox Coins: ", 25);
      this.menu = this.add.bitmapText(1140, 315, "pixelFont", "MENU", 25);
    }
  
    //update function
    update()  
    {
      //parallax
      this.background01.tilePositionX += 2;
      this.background02.tilePositionX += 1;
      this.background03.tilePositionX += 0.5;
      this.background04.tilePositionX += 0.25;
      this.background05.tilePositionX += 0.125;
      this.background06.tilePositionX += 0;
  
      this.movLixo(this.lixo01, -3);
      this.movLixo(this.lixo02, -3);
      this.movLixo(this.lixo03, -3);

      for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var slash = this.projectiles.getChildren()[i];
        slash.update();
      }
    }

    //disparo da raposa(slash)
    shootSlash(){
      var slash = new Slash(this);
    }
    //lixos movendo funçao
    movLixo(lixo, spdx){
      lixo.x += spdx;
      if(lixo.x < -30)
      {
        this.resetLixoPos(lixo);
      }
    }
    resetLixoPos(lixo){
      lixo.x = (Math.random() * (2500 - 1550)) + 1475;
    }
    hitLixo(projectiles, lixo){
      projectiles.destroy();
      this.resetLixoPos(lixo);
      if(lixo == this.lixo01){
        this.score += 10;
      }
      if(lixo == this.lixo02){
        this.score += 15;
      }
      if(lixo == this.lixo03){
        this.score += 5;
      }
      this.scoreLabel.text = "Fox Coins: " + this.score;
    }
  }