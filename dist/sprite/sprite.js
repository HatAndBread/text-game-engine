export default class Sprite {
    constructor({ xPos = 0, yPos = 0, color = 'black', backgroundColor = 'transparent', zIndex = 0, shape = [[{ char: '', color: 'white', backgroundColor: 'transparent', x: 0, y: 0 }]] }) {
        this.updateFrame = () => this.currentFrame < this.shape.length - 1 ? this.currentFrame += 1 : this.currentFrame = 0;
        this.initial = { shape, xPos, yPos, color, backgroundColor, zIndex };
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.zIndex = zIndex;
        this.shape = shape;
        this.currentFrame = 0;
        Object.freeze(this.initial);
    }
}
