export default class Sprite {
    constructor({ xPos = 0, yPos = 0, color = 'black', backgroundColor = 'transparent', zIndex = 0, fps = 5 }) {
        this.setCurrentAnimation = (name) => {
            if (!this.animations[name]) {
                throw new Error(`Animation ${name} does not exist on ${this}`);
            }
            else {
                this.currentFrame = 0;
                this.currentAnimation = name;
            }
        };
        this.updateFrame = () => {
            this.currentTick < 59 ? (this.currentTick += 1) : (this.currentTick = 0);
            if (this.currentAnimation &&
                this.currentFrame < this.animations[this.currentAnimation].length - 1) {
                if (!(this.currentTick % this.fps))
                    this.currentFrame += 1;
            }
            else {
                if (!(this.currentTick % this.fps))
                    this.currentFrame = 0;
            }
        };
        this.addAnimation = (name, animation) => (this.animations[name] = animation);
        this.initial = { xPos, yPos, color, backgroundColor, zIndex };
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.zIndex = zIndex;
        this.currentFrame = 0;
        this.currentTick = 0;
        this.fps = fps;
        this.animations = {};
        this.currentAnimation = null;
        Object.freeze(this.initial);
    }
}
