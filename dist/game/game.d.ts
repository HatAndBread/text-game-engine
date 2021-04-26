interface Options {
    width?: number;
    height?: number;
    fps?: number;
    pixelSize?: number;
    backgroundColor?: string;
}
export default class Game {
    width: number;
    height: number;
    fps: number;
    pixelSize: number;
    backgroundColor: string;
    animating: boolean;
    canvas: HTMLDivElement;
    rows: HTMLDivElement[][];
    constructor({ width, height, fps, pixelSize, backgroundColor }: Options);
    createCanvas(): void;
    startLoop(): void;
    endLoop(): void;
    private loop;
}
export {};
