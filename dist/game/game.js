export default class Game {
    constructor({ width = 100, height = 100, fps = 5, pixelSize = 5, backgroundColor = 'white', sprites = null }) {
        this.loop = () => {
            const stuff = ["▇", "█", "▉", "▐", "░", "▒", "▓"];
            this.rows.forEach((row) => {
                row.forEach((el) => {
                    el.textContent = stuff[Math.floor(Math.random() * stuff.length)];
                });
            });
            if (this.sprites) {
                this.sprites.forEach((sprite) => {
                    for (let i = 0; i < sprite.shape[0].length; i++) {
                        this.rows[sprite.yPos][sprite.xPos + i].textContent = sprite.shape[0][i];
                    }
                });
            }
            if (this.animating)
                window.requestAnimationFrame(this.loop);
        };
        this.width = width;
        this.height = height;
        this.fps = fps;
        this.pixelSize = pixelSize;
        this.backgroundColor = backgroundColor;
        this.rows = [];
        this.sprites = sprites;
        this.animating = false;
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
                newPixel.style.padding = '0';
                newPixel.style.margin = '0';
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
}
