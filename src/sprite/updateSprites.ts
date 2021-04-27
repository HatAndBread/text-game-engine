import Game from '../game/game.js';
const updateSprites = (game: Game) => {
  if (game.sprites) {
    game.sprites.forEach((sprite) => {
      if (sprite.currentAnimation) {
        sprite.animations[sprite.currentAnimation][sprite.currentFrame].forEach(
          (char) => {
            if (
              game.rows[sprite.yPos + char.y] &&
              game.rows[sprite.yPos + char.y][sprite.xPos + char.x]
            ) {
              const pixel =
                game.rows[sprite.yPos + char.y][sprite.xPos + char.x];
              game.elementsToBeCleared.push(pixel);
              pixel.textContent = char.char;
              if (sprite.backgroundColor) {
                pixel.style.backgroundColor = sprite.backgroundColor;
              }
              pixel.style.color = char.color;
            }
          }
        );
      }
      sprite.updateFrame(game.currentTick);
    });
  }
};

export default updateSprites;
