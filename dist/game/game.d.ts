interface Options {
    width?: number;
    height?: number;
    fps?: number;
    pixelSize?: number;
}
export default class Game {
    width: number;
    height: number;
    fps: number;
    pixelSize: number;
    constructor({ width, height, fps, pixelSize }: Options);
    createCanvas(): void;
}
export {};
