export declare const sprites: Sprite[];
interface Options {
    xPos?: number;
    yPos?: number;
    backgroundColor?: string;
    animationSpeed?: number;
    zIndex?: number;
    platform?: boolean;
    feelGravity?: boolean;
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
    backgroundColor: string;
    zIndex: number;
    platform: boolean;
    feelGravity: boolean;
    currentFrame: number;
    animationSpeed: number;
    currentlyJumping: boolean;
    jumpAscending: boolean;
    jumpDescending: boolean;
    jumpHeight: number | null;
    originalJumpHeight: number;
    fallHeight: number | null;
    ticksUntilNextJumpStep: number;
    ticksPassedSinceLastJumpStep: number;
    firstJumpFrame: boolean;
    animations: {
        [key: string]: Animation;
    };
    currentAnimation: string | null;
    currentCoords: {
        x: number;
        y: number;
    }[];
    constructor({ xPos, yPos, backgroundColor, zIndex, animationSpeed, platform, feelGravity }: Options);
    setCurrentAnimation: (name: string) => void;
    updateFrame: (currentTick: number) => void;
    jump(height: number): void;
    stopJump(): void;
    touching(sprite: Sprite): boolean;
    touchingPlatform(): boolean;
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
