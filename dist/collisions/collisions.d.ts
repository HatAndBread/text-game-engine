import Game from '../game/game.js';
import Sprite from '../sprite/sprite.js';
declare const onCollision: (spriteOne: Sprite, spriteTwo: Sprite, triggerOnceWhileTrue: boolean, callback: () => any) => number;
declare const detectCollisions: (game: Game) => void;
export { detectCollisions, onCollision };
