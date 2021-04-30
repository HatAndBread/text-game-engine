import round from '../helpers/round.js';

export const sprites: Sprite[] = [];

interface Options {
  xPos?: number;
  yPos?: number;
  backgroundColor?: string;
  animationSpeed?: number;
  zIndex?: number;
  platform?: boolean;
  feelGravity?: boolean;
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
  backgroundColor: string;
  zIndex: number;
  platform: boolean;
  feelGravity: boolean;
  currentFrame: number;
  animationSpeed: number;
  currentlyJumping: boolean;
  jumpAscending: boolean;
  jumpDescending: boolean;
  jumpHeight: number | null;
  originalJumpHeight: number;
  fallHeight: number | null;
  ticksUntilNextJumpStep: number;
  ticksPassedSinceLastJumpStep: number;
  firstJumpFrame: boolean;
  animations: { [key: string]: Animation };
  currentAnimation: string | null;
  currentCoords: { x: number; y: number }[];
  constructor({
    xPos = 0,
    yPos = 0,
    backgroundColor = 'transparent',
    zIndex = 0,
    animationSpeed = 5,
    platform = false,
    feelGravity = false
  }: Options) {
    this.initial = { xPos, yPos, backgroundColor, zIndex, platform };
    this.xPos = xPos;
    this.yPos = yPos;
    this.backgroundColor = backgroundColor;
    this.zIndex = zIndex;
    this.platform = platform;
    this.feelGravity = feelGravity;
    this.currentFrame = 0;
    this.animationSpeed = round(animationSpeed);
    this.animations = {};
    this.currentAnimation = null;
    this.currentCoords = this.createCoords();
    this.currentlyJumping = false;
    this.jumpAscending = false;
    this.jumpDescending = false;
    this.jumpHeight = null;
    this.originalJumpHeight = 0;
    this.ticksUntilNextJumpStep = 0;
    this.ticksPassedSinceLastJumpStep = 0;
    this.firstJumpFrame = false;
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
      this.firstJumpFrame = true;
      this.currentlyJumping = true;
      this.originalJumpHeight = height;
      this.jumpHeight = height;
      this.fallHeight = height;
      this.ticksUntilNextJumpStep = 1;
      this.ticksPassedSinceLastJumpStep = 0;
      this.jumpAscending = true;
      this.originalJumpHeight = height;
    }
  }
  stopJump() {
    this.firstJumpFrame = false;
    this.currentlyJumping = false;
    this.jumpAscending = false;
    this.jumpDescending = false;
    this.jumpHeight = null;
    this.originalJumpHeight = 0;
    this.ticksUntilNextJumpStep = 0;
    this.ticksPassedSinceLastJumpStep = 0;
    this.fallHeight = null;
  }
  touching(sprite: Sprite): boolean {
    for (let i = 0; i < sprite.currentCoords.length; i++) {
      for (let j = 0; j < this.currentCoords.length; j++) {
        if (
          sprite.currentCoords[i].x === this.currentCoords[j].x &&
          sprite.currentCoords[i].y === this.currentCoords[j].y
        ) {
          return true;
        }
      }
    }
    return false;
  }
  touchingPlatform(): boolean {
    for (let i = 0; i < sprites.length; i++) {
      if (sprites[i].platform) {
        for (let j = 0; j < this.currentCoords.length; j++) {
          for (let k = 0; k < sprites[i].currentCoords.length; k++) {
            if (
              this.currentCoords[j].x === sprites[i].currentCoords[k].x &&
              this.currentCoords[j].y + 1 === sprites[i].currentCoords[k].y
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  topTouchingPlatform(): boolean {
    for (let i = 0; i < sprites.length; i++) {
      if (sprites[i].platform) {
        for (let j = 0; j < this.currentCoords.length; j++) {
          for (let k = 0; k < sprites[i].currentCoords.length; k++) {
            if (
              this.currentCoords[j].x === sprites[i].currentCoords[k].x &&
              this.yPos - 1 === sprites[i].currentCoords[k].y
            ) {
              return true;
            }
          }
        }
      }
    }
    return false;
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
