import * as s from './index.js';
const game = new s.Game({ width: 50, height: 20, fps: 5, pixelSize: 20 });
game.createCanvas();
game.startLoop();
window.game = game;
