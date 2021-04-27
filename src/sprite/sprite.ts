interface Options{
  xPos?: number
  yPos?: number
  color?: string
  backgroundColor?: string
  zIndex?: number
  shape?: {char: string, color: string, backgroundColor?: string, x: number, y: number}[][]
}

type Animation = {char: string, color: string, backgroundColor?: string, x: number, y: number}[][]

export default class Sprite{
    initial: Options
    xPos: number
    yPos: number
    color: string
    backgroundColor: string
    zIndex: number
    shape: {char: string, color: string, backgroundColor?: string, x: number, y: number}[][]
    currentFrame: number
    animations: {[key:string]: Animation}
    currentAnimation: string | null
    constructor({xPos = 0, yPos = 0, color = 'black', backgroundColor = 'transparent', zIndex = 0, shape = [[{char: '', color: 'white', backgroundColor: 'transparent', x: 0, y: 0}]] }: Options){
        this.initial = {shape, xPos, yPos, color, backgroundColor, zIndex};
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.zIndex = zIndex;
        this.shape = shape;
        this.currentFrame = 0;
        this.animations = {}
        this.currentAnimation = null;
        Object.freeze(this.initial);
    }
    updateFrame = ()=> this.currentFrame < this.shape.length - 1 ? this.currentFrame += 1 : this.currentFrame = 0; 
    addAnimation = (name: string, animation: Animation) => this.animations[name] = animation;
}

