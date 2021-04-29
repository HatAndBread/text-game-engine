import round from '../helpers/round.js';

export const sprites: Sprite[] = [];

interface Options {
  xPos?: number;
  yPos?: number;
  color?: string;
  backgroundColor?: string;
  animationSpeed?: number;
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
  animationSpeed: number;
  jumpAscending: boolean;
  jumpDescending: boolean;
  jumpHeight: number | null;
  fallHeight: number | null;
  animations: { [key: string]: Animation };
  currentAnimation: string | null;
  currentCoords: { x: number; y: number }[];
  constructor({
    xPos = 0,
    yPos = 0,
    color = 'black',
    backgroundColor = 'transparent',
    zIndex = 0,
    animationSpeed = 5
  }: Options) {
    this.initial = { xPos, yPos, color, backgroundColor, zIndex };
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.zIndex = zIndex;
    this.currentFrame = 0;
    this.animationSpeed = round(animationSpeed);
    this.animations = {};
    this.currentAnimation = null;
    this.currentCoords = this.createCoords();
    this.jumpAscending = false;
    this.jumpDescending = false;
    this.jumpHeight = null;
    this.fallHeight = null;
    Object.freeze(this.initial);
    sprites.push(this);
  }
  setCurrentAnimation = (name: string) => {
    if (!this.animations[name]) {
      throw new Error(`Animation ${name} does not exist on ${this}`);
    } else {
      this.currentFrame = 0;
      this.currentAnimation = name;
    }
  };
  updateFrame = (currentTick: number) => {
    this.currentCoords = this.createCoords();
    if (
      this.currentAnimation &&
      this.currentFrame < this.animations[this.currentAnimation].length - 1
    ) {
      if (!(currentTick % this.animationSpeed)) this.currentFrame += 1;
    } else {
      if (!(currentTick % this.animationSpeed)) this.currentFrame = 0;
    }
  };
  jump(height: number) {
    if (!this.jumpAscending && !this.jumpDescending) {
      this.jumpHeight = height;
      this.fallHeight = height;
      this.jumpAscending = true;
    }
  }
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
  private createCoords = () => {
    const coords: { x: number; y: number }[] = [];
    if (this.currentAnimation) {
      this.animations[this.currentAnimation][this.currentFrame].forEach(
        (char) => {
          coords.push({ x: char.x + this.xPos, y: char.y + this.yPos });
        }
      );
    }
    return coords;
  };
}
