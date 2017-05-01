/// <reference path="libs/phaser.js" />
//import * as Phaser from "./libs/phaser.js";

var game = new Phaser.Game(1024, 800, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
