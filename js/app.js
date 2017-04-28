"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = require("./libs/phaser.js");
var game = new Phaser.Game(1024, 800, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
