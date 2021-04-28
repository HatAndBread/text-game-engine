import Game from '../game/game.js';
import Sprite from '../sprite/sprite.js';

const detectCollisions = (game: Game) => {
  if (game.sprites && game.sprites.length > 1) {
    for (let i = 0; i < game.sprites.length; i++) {
      for (let j = 0; j < game.sprites.length; j++) {
        if (i !== j) {
          //isColliding(game.sprites[i], game.sprites[j]);
          const [spriteOne, spriteTwo] = [game.sprites[i], game.sprites[j]];
          if (isColliding(game.sprites[i], game.sprites[j])) {
            console.log('Collision detected! 🎉');
          }
        }
      }
    }
  }
};

const isColliding = (spriteOne: Sprite, spriteTwo: Sprite): boolean => {
  for (let i = 0; i < spriteOne.currentCoords.length; i++) {
    for (let j = 0; j < spriteTwo.currentCoords.length; j++) {
      if (
        spriteOne.currentCoords[i].x === spriteTwo.currentCoords[j].x &&
        spriteOne.currentCoords[i].y === spriteTwo.currentCoords[j].y
      ) {
        return true;
      }
    }
  }
  return false;
};

export { detectCollisions };
