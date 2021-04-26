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
    constructor({ xPos, yPos, color, backgroundColor, zIndex, shape }: Options);
    updateFrame: () => number;
}
export {};
