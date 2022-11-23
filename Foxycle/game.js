//configuração de resolução e tamanho da tela do jogo
var config =
{
    width: 1475,
    height: 725,
    backgroundColor: 0x261321,
    pixelart: true,
    scene: [Scene1, Scene2],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    }
} 
//TAMANHO DA TELA DO JOGO: 270
var game = new Phaser.Game(config);