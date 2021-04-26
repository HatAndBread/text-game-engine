import * as s from './index.js'

const sprite = new s.Sprite({xPos: 10, yPos: 10, shape:[`◢◘◣`,`◄◘►`], backgroundColor: 'green', zIndex: 1})
const game = new s.Game({width: 50, height: 20, fps: 5, pixelSize: 20, sprites: [sprite]});

game.createCanvas()
game.startLoop();

console.log(game)

declare global {
    interface Window { game: any; }
}

window.game = game;