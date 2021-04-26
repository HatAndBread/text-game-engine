interface Options {
    xPos?: number;
    yPos?: number;
    shape?: string[];
    backgroundColor?: string;
}
export default class Sprite {
    initial: Options;
    xPos: number;
    yPos: number;
    shape: string[];
    backgroundColor: string;
    constructor({ xPos, yPos, shape, backgroundColor }: Options);
}
export {};
