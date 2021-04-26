import * as s from './index.js'

const game = new s.Game({width: 50, height: 20, fps: 5, pixelSize: 20});
const sprite = new s.Sprite({xPos: 10, yPos: 10, shape:[`◢◘◣`,`◄◘►`], backgroundColor: 'green', zIndex: 1})

game.createCanvas()
game.startLoop();

console.log(sprite)

declare global {
    interface Window { game: any; }
}

window.game = game;