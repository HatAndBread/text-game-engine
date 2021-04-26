interface Options{
  shape: string
  xPos: number
  yPos: number
}

class Sprite{
    initial: Options
    shape: string
    xPos: number
    yPos: number
    constructor({shape, xPos, yPos}: Options){
        this.initial = {shape, xPos, yPos};
        this.shape = shape;
        this.xPos = xPos;
        this.yPos = yPos;
    }
}