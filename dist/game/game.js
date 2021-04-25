export default class Game {
    constructor({ width = 100, height = 100, fps = 5, pixelSize = 5 }) {
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.pixelSize = pixelSize;
    }
    createCanvas() {
        const canvas = document.createElement('div');
        document.body.appendChild(canvas);
        canvas.id = 'game-canvas';
        canvas.style.backgroundColor = 'green';
        canvas.style.width = `${this.width * this.pixelSize}px`;
        canvas.style.height = `${this.height * this.pixelSize}px`;
    }
}
