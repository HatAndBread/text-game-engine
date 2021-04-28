import Sprite from '../sprite/sprite.js';
declare const onCollision: (spriteOne: Sprite, spriteTwo: Sprite, triggerOnceWhileTrue: boolean, callback: () => any) => number;
declare const detectCollisions: () => void;
export { detectCollisions, onCollision };
