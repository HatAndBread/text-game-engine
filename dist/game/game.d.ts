import Sprite from '../sprite/sprite.js';
interface Options {
    width?: number;
    height?: number;
    fps?: number;
    pixelSize?: number;
    backgroundColor?: string;
    sprites?: Sprite[] | null;
}
export default class Game {
    width: number;
    height: number;
    fps: number;
    pixelSize: number;
    backgroundColor: string;
    sprites: Sprite[] | null;
    animating: boolean;
    canvas: HTMLDivElement;
    rows: HTMLDivElement[][];
    constructor({ width, height, fps, pixelSize, backgroundColor, sprites }: Options);
    createCanvas(): void;
    startLoop(): void;
    endLoop(): void;
    private loop;
}
export {};
