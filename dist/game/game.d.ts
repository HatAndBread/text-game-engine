interface Options {
    width?: number;
    height?: number;
    pixelSize?: number;
    backgroundColor?: string;
    keyboardSpeed?: number;
}
export default class Game {
    width: number;
    height: number;
    pixelSize: number;
    backgroundColor: string;
    animating: boolean;
    canvas: HTMLDivElement;
    rows: HTMLDivElement[][];
    currentTick: number;
    keyboardSpeed: number;
    elementsToBeCleared: HTMLDivElement[];
    everyTickCB?: ((tick: number) => void) | null;
    constructor({ width, height, pixelSize, backgroundColor, keyboardSpeed }: Options);
    startLoop(): void;
    endLoop(): void;
    everyTick(cb: (tick: number) => void): void;
    private loop;
}
export {};
