import * as s from './index.js';
const game = new s.Game({ width: 50, height: 20, fps: 5, pixelSize: 20 });
const sprite = new s.Sprite({ xPos: 10, yPos: 10, shape: [`◢◘◣`, `◄◘►`], backgroundColor: 'green' });
game.createCanvas();
game.startLoop();
console.log(sprite);
window.game = game;
