import Game from './game/game.js';
import Sprite from './sprite/sprite.js';
import { onKeyDown, onKeyUp } from './keyboard/keyboard.js';
import { onCollision } from './collisions/collisions.js';
import { onClick } from './mouse/mouse.js';
const s = {
  Game: Game,
  Sprite: Sprite,
  onKeyDown,
  onKeyUp,
  onCollision,
  onClick
};
export { Game, Sprite, onKeyDown, onKeyUp, onCollision, onClick };
export default s;
