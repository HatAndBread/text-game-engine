import updateSprites from '../sprite/updateSprites.js';
import { listenForKeyboard, checkKeyboardEvents } from '../keyboard/keyboard.js';
import { listenForMouse } from '../mouse/mouse.js';
import round from '../helpers/round.js';
import { detectCollisions } from '../collisions/collisions.js';
import createCanvas from './createCanvas.js';
export default class Game {
    constructor({ width = 100, height = 100, fps = 5, pixelSize = 5, backgroundColor = 'white', keyboardSpeed = 2 }) {
        this.loop = () => {
            this.elementsToBeCleared.forEach((el) => {
                el.textContent = '';
                el.style.backgroundColor = 'transparent';
            });
            if (!(this.currentTick % this.keyboardSpeed))
                checkKeyboardEvents();
            this.elementsToBeCleared = [];
            updateSprites(this);
            detectCollisions();
            if (this.everyTickCB)
                this.everyTickCB(this.currentTick);
            this.currentTick < 60 ? (this.currentTick += 1) : (this.currentTick = 1);
            if (this.animating)
                window.requestAnimationFrame(this.loop);
        };
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.pixelSize = pixelSize;
        this.backgroundColor = backgroundColor;
        this.rows = [];
        this.animating = false;
        this.elementsToBeCleared = [];
        this.keyboardSpeed = round(keyboardSpeed);
        this.currentTick = 1;
        this.everyTickCB = null;
        listenForKeyboard();
        listenForMouse();
        this.canvas = document.createElement('div');
        createCanvas(this);
    }
    startLoop() {
        this.animating = true;
        this.loop();
    }
    endLoop() {
        this.animating = false;
    }
    everyTick(cb) {
        this.everyTickCB = cb;
    }
}
