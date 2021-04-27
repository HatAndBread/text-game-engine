import Game from './game/game.js';
import Sprite from './sprite/sprite.js';
import {onKeyDown, onKeyUp} from './keyboard/keyboard.js'
const s = {Game: Game, Sprite: Sprite, onKeyDown, onKeyUp}
export {Game, Sprite, onKeyDown, onKeyUp}
export default s;