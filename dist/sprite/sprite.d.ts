interface Options {
    xPos?: number;
    yPos?: number;
    color?: string;
    backgroundColor?: string;
    animationSpeed?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | 60;
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
    currentTick: number;
    animations: {
        [key: string]: Animation;
    };
    currentAnimation: string | null;
    constructor({ xPos, yPos, color, backgroundColor, zIndex, animationSpeed }: Options);
    setCurrentAnimation: (name: string) => void;
    updateFrame: () => void;
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
}
export {};
