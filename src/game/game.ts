import Pixel from '../pixel/pixel.js';
import Sprite from '../sprite/sprite.js';
import BRUSHES from '../constants/BRUSHES.js';
import {
  listenForKeyboard,
  checkKeyboardEvents
} from '../keyboard/keyboard.js';

interface Options {
  width?: number;
  height?: number;
  fps?: number;
  pixelSize?: number;
  backgroundColor?: string;
  sprites?: Sprite[] | null;
}

export default class Game {
  width: number;
  height: number;
  fps: number;
  pixelSize: number;
  backgroundColor: string;
  sprites: Sprite[] | null;
  animating: boolean;
  canvas: HTMLDivElement;
  rows: HTMLDivElement[][];

  constructor({
    width = 100,
    height = 100,
    fps = 5,
    pixelSize = 5,
    backgroundColor = 'white',
    sprites = null
  }: Options) {
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.pixelSize = pixelSize;
    this.backgroundColor = backgroundColor;
    this.rows = [];
    this.sprites = sprites;
    this.animating = false;
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
        newPixel.style.textAlign = 'center';
        newPixel.style.overflow = 'hidden';
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
    checkKeyboardEvents();
    this.rows.forEach((row) => {
      row.forEach((el) => {
        el.textContent = '';
      });
    });
    if (this.sprites) {
      this.sprites.forEach((sprite) => {
        sprite.currentAnimation &&
          sprite.animations[sprite.currentAnimation][
            sprite.currentFrame
          ].forEach((char) => {
            if (
              this.rows[sprite.yPos + char.y] &&
              this.rows[sprite.yPos + char.y][sprite.xPos + char.x]
            ) {
              const pixel = this.rows[sprite.yPos + char.y][
                sprite.xPos + char.x
              ];
              pixel.textContent = char.char;
              if (sprite.backgroundColor)
                pixel.style.backgroundColor = sprite.backgroundColor;
              pixel.style.color = char.color;
            }
          });
        sprite.updateFrame();
      });
    }
    if (this.animating) window.requestAnimationFrame(this.loop);
  };
}
