import updateSprites from '../sprite/updateSprites.js';
import { listenForKeyboard, checkKeyboardEvents } from '../keyboard/keyboard.js';
import { listenForMouse } from '../mouse/mouse.js';
import round from '../helpers/round.js';
import { detectCollisions } from '../collisions/collisions.js';
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
    }
    createCanvas() {
        this.canvas.style.fontSize = `${this.pixelSize}px`;
        document.body.appendChild(this.canvas);
        this.canvas.id = 'game-canvas';
        this.canvas.style.fontFamily = 'monospace';
        this.canvas.style.backgroundColor = this.backgroundColor;
        this.canvas.style.width = 'fit-content';
        this.canvas.style.lineHeight = '1';
        for (let i = 0; i < this.height; i++) {
            const arr = [];
            const newRow = document.createElement('div');
            newRow.style.display = 'flex';
            newRow.style.padding = '0';
            newRow.style.margin = '0';
            this.canvas.appendChild(newRow);
            for (let j = 0; j < this.width; j++) {
                const newPixel = document.createElement('div');
                newPixel.style.padding = '0px';
                newPixel.style.margin = '0px';
                newPixel.style.height = `${this.pixelSize}px`;
                newPixel.style.width = `${this.pixelSize - this.pixelSize * 0.4}px`;
                newPixel.style.display = 'flex';
                newPixel.style.justifyContent = 'center';
                newPixel.style.textAlign = 'center';
                newPixel.dataset.x = `${j}`;
                newPixel.dataset.y = `${i}`;
                newRow.appendChild(newPixel);
                arr.push(newPixel);
            }
            this.rows.push(arr);
        }
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
