import Sprite from '../sprite/sprite.js';
export declare const clickObjects: {
    sprite: Sprite;
    callback: () => any;
}[];
export declare function listenForMouse(): void;
export declare const onClick: (sprite: Sprite, callback: () => any) => number;
