interface Options {
    xPos?: number;
    yPos?: number;
    color?: string;
    backgroundColor?: string;
    zIndex?: number;
    shape?: {
        char: string;
        color: string;
        backgroundColor?: string;
        x: number;
        y: number;
    }[][];
}
declare type Animation = {
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
    shape: {
        char: string;
        color: string;
        backgroundColor?: string;
        x: number;
        y: number;
    }[][];
    currentFrame: number;
    animations: {
        [key: string]: Animation;
    };
    currentAnimation: string | null;
    constructor({ xPos, yPos, color, backgroundColor, zIndex, shape }: Options);
    updateFrame: () => number;
    addAnimation: (name: string, animation: Animation) => Animation;
}
export {};
