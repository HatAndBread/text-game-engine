import Pixel from '../pixel/pixel.js';
import Sprite, { sprites } from '../sprite/sprite.js';
import BRUSHES from '../constants/BRUSHES.js';
import updateSprites from '../sprite/updateSprites.js';
import {
  listenForKeyboard,
  checkKeyboardEvents
} from '../keyboard/keyboard.js';
import round from '../helpers/round.js';
import { detectCollisions } from '../collisions/collisions.js';

interface Options {
  width?: number;
  height?: number;
  fps?: number;
  pixelSize?: number;
  backgroundColor?: string;
  keyboardSpeed?: number;
}

export default class Game {
  width: number;
  height: number;
  fps: number;
  pixelSize: number;
  backgroundColor: string;
  animating: boolean;
  canvas: HTMLDivElement;
  rows: HTMLDivElement[][];
  currentTick: number;
  keyboardSpeed: number;
  elementsToBeCleared: HTMLDivElement[];

  constructor({
    width = 100,
    height = 100,
    fps = 5,
    pixelSize = 5,
    backgroundColor = 'white',
    keyboardSpeed = 2
  }: Options) {
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.pixelSize = pixelSize;
    this.backgroundColor = backgroundColor;
    this.rows = [];
    this.animating = false;
    this.elementsToBeCleared = [];
    this.keyboardSpeed = round(keyboardSpeed);
    this.currentTick = 0;
    listenForKeyboard();
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

  private loop = () => {
    this.elementsToBeCleared.forEach((el) => {
      el.textContent = '';
      el.style.backgroundColor = 'transparent';
    });
    if (!(this.currentTick % this.keyboardSpeed)) checkKeyboardEvents();
    this.elementsToBeCleared = [];
    updateSprites(this);
    detectCollisions(this);
    this.currentTick < 59 ? (this.currentTick += 1) : (this.currentTick = 0);
    if (this.animating) window.requestAnimationFrame(this.loop);
  };
}
