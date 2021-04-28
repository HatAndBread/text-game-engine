export declare const sprites: Sprite[];
interface Options {
    xPos?: number;
    yPos?: number;
    color?: string;
    backgroundColor?: string;
    animationSpeed?: number;
    zIndex?: number;
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
    currentFrame: number;
    animationSpeed: number;
    animations: {
        [key: string]: Animation;
    };
    currentAnimation: string | null;
    currentCoords: {
        x: number;
        y: number;
    }[];
    constructor({ xPos, yPos, color, backgroundColor, zIndex, animationSpeed }: Options);
    setCurrentAnimation: (name: string) => void;
    updateFrame: (currentTick: number) => void;
    addAnimation: (name: string, animation: {
        char: string;
        color: string;
        backgroundColor?: string;
        x: number;
        y: number;
    }[][]) => {
        char: string;
        color: string;
        backgroundColor?: string | undefined;
        x: number;
        y: number;
    }[][];
    private createCoords;
}
export {};
