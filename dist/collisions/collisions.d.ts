import Game from '../game/game.js';
import Sprite from '../sprite/sprite.js';
declare const onCollision: (spriteOne: Sprite | string, spriteTwo: Sprite | string, callback: () => any) => void;
declare const detectCollisions: (game: Game) => void;
export { detectCollisions, onCollision };
