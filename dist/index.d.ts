import Game from './game/game.js';
import Sprite from './sprite/sprite.js';
declare const s: {
    Game: typeof Game;
    Sprite: typeof Sprite;
};
export { Game, Sprite };
export default s;
