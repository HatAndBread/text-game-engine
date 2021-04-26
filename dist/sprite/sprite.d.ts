interface Options {
    xPos?: number;
    yPos?: number;
    color?: string;
    backgroundColor?: string;
    zIndex?: number;
    shape?: string[];
}
export default class Sprite {
    initial: Options;
    xPos: number;
    yPos: number;
    color: string;
    backgroundColor: string;
    zIndex: number;
    shape: string[];
    constructor({ xPos, yPos, color, backgroundColor, zIndex, shape }: Options);
}
export {};
