import Pixel from '../pixel/pixel.js'
import BRUSHES from '../constants/BRUSHES.js';

interface Options  {
  width?: number
  height?: number
  fps?: number
  pixelSize?: number
  backgroundColor?: string
}

export default class Game{
    width: number
    height: number
    fps: number
    pixelSize: number
    backgroundColor: string
    animating: boolean;
    canvas: HTMLDivElement;
    rows: HTMLDivElement[][]

    constructor({width = 100, height = 100, fps = 5, pixelSize = 5, backgroundColor = 'white'}: Options){
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.pixelSize = pixelSize;
        this.backgroundColor = backgroundColor;
        this.rows = []
        this.animating = false;
        this.canvas = document.createElement('div');
    }
    createCanvas(){
        this.canvas.style.fontSize = `${this.pixelSize}px`
        document.body.appendChild(this.canvas);
        this.canvas.id = 'game-canvas';
        this.canvas.style.fontFamily = 'monospace';
        this.canvas.style.backgroundColor = this.backgroundColor;
        this.canvas.style.width = 'fit-content';
        this.canvas.style.lineHeight = '1';
        for (let i = 0; i < this.height; i++){
            const arr = [];
            const newRow = document.createElement('div');
            newRow.style.display = 'flex';
            newRow.style.padding = '0';
            newRow.style.margin = '0';
            this.canvas.appendChild(newRow);
            for (let j = 0; j < this.width; j++){
                const newPixel = document.createElement('div');
                newPixel.style.padding = '0';
                newPixel.style.margin = '0';
                newRow.appendChild(newPixel);
                arr.push(newPixel);
            }
            this.rows.push(arr);
        }
    }
    startLoop(){
        this.animating = true;
        this.loop()
    }
    endLoop(){
        this.animating = false;
    }
    private loop = () => {
        const stuff = ["▇","█","▉","▐","░","▒","▓"]
        this.rows.forEach((row)=>{
            row.forEach((el)=>{
                el.textContent = stuff[Math.floor(Math.random()*stuff.length)];
                //el.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
            })
        })
        if (this.animating) window.requestAnimationFrame(this.loop)
    }
}