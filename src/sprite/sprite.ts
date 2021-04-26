interface Options{
  shape: string
  xPos: number
  yPos: number
}

export default class Sprite{
    initial: Options
    shape: string
    xPos?: number
    yPos?: number
    constructor({shape, xPos = 0, yPos = 0}: Options){
        this.initial = {shape, xPos, yPos};
        this.shape = shape;
        this.xPos = xPos;
        this.yPos = yPos;
        Object.freeze(this.initial);
    }
}