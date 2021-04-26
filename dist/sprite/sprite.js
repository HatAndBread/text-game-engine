export default class Sprite {
    constructor({ xPos = 0, yPos = 0, shape = [''], backgroundColor = 'black' }) {
        this.initial = { shape, xPos, yPos };
        this.shape = shape;
        this.xPos = xPos;
        this.yPos = yPos;
        this.backgroundColor = backgroundColor;
        Object.freeze(this.initial);
    }
}
