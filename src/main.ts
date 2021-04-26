import * as s from './index.js';

const spriteShape = [[{char: '◢', color: 'red', x: 0, y: 0},{char: '◘', color: 'blue', x: 1, y: 0},{char: '◣', color: 'red', x: 2, y: 0}],[{char: '◄', color: 'red', x: 0, y: 0},{char: '◘', color: 'blue', x: 1, y: 0},{char: '►', color: 'red', x: 2, y: 0}]]

const sprite = new s.Sprite({xPos: 10, yPos: 10, backgroundColor: 'green', zIndex: 1, shape: spriteShape})
const game = new s.Game({width: 50, height: 20, fps: 5, pixelSize: 20, sprites: [sprite]});

game.createCanvas()
game.startLoop();

console.log(game)

declare global {
    interface Window { game: any; }
}

window.game = game;