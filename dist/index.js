import Game from './game/game.js';
import Sprite from './sprite/sprite.js';
import { onKeyDown, onKeyUp } from './keyboard/keyboard.js';
import { onCollision } from './collisions/collisions.js';
const s = { Game: Game, Sprite: Sprite, onKeyDown, onKeyUp, onCollision };
export { Game, Sprite, onKeyDown, onKeyUp, onCollision };
export default s;
