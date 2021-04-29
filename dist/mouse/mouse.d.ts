import Sprite from '../sprite/sprite.js';
export declare function listenForMouse(): void;
export declare const onSpriteClicked: (sprite: Sprite, callback: (coords: {
    x: number;
    y: number;
}) => any) => void;
export declare const onClick: (callback: ({ x, y }: {
    x: number;
    y: number;
}) => any) => void;
