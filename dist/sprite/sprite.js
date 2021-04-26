export default class Sprite {
    constructor({ xPos = 0, yPos = 0, color = 'black', backgroundColor = 'transparent', zIndex = 0, shape = [''] }) {
        this.initial = { shape, xPos, yPos, color, backgroundColor, zIndex };
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.zIndex = zIndex;
        this.shape = shape;
        Object.freeze(this.initial);
    }
}
