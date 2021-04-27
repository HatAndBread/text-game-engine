interface Options {
  xPos?: number;
  yPos?: number;
  color?: string;
  backgroundColor?: string;
  fps?: number;
  zIndex?: number;
}

type Animation = {
  char: string;
  color: string;
  backgroundColor?: string;
  x: number;
  y: number;
}[][];

export default class Sprite {
  initial: Options;
  xPos: number;
  yPos: number;
  color: string;
  backgroundColor: string;
  zIndex: number;
  currentFrame: number;
  fps: number;
  animations: { [key: string]: Animation };
  currentAnimation: string | null;
  constructor({
    xPos = 0,
    yPos = 0,
    color = 'black',
    backgroundColor = 'transparent',
    zIndex = 0,
    fps = 5
  }: Options) {
    this.initial = { xPos, yPos, color, backgroundColor, zIndex };
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.zIndex = zIndex;
    this.currentFrame = 0;
    this.fps = fps;
    this.animations = {};
    this.currentAnimation = null;
    Object.freeze(this.initial);
  }
  setCurrentAnimation = (name: string) => {
    if (!this.animations[name]) {
      throw new Error(`Animation ${name} does not exist on ${this}`);
    } else {
      this.currentFrame = 0;
      this.currentAnimation = name;
    }
  };
  updateFrame = () => {
    if (
      this.currentAnimation &&
      this.currentFrame < this.animations[this.currentAnimation].length - 1
    ) {
      this.currentFrame += 1;
    } else {
      this.currentFrame = 0;
    }
  };
  addAnimation = (
    name: string,
    animation: {
      char: string;
      color: string;
      backgroundColor?: string;
      x: number;
      y: number;
    }[][]
  ) => (this.animations[name] = animation);
}
