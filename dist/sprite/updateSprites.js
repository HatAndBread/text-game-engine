import { sprites } from '../sprite/sprite.js';
const updateSprites = (game) => {
    if (sprites) {
        sprites.forEach((sprite) => {
            if (sprite.currentAnimation) {
                sprite.animations[sprite.currentAnimation][sprite.currentFrame].forEach((char) => {
                    if (game.rows[sprite.yPos + char.y] &&
                        game.rows[sprite.yPos + char.y][sprite.xPos + char.x]) {
                        const pixel = game.rows[sprite.yPos + char.y][sprite.xPos + char.x];
                        game.elementsToBeCleared.push(pixel);
                        pixel.textContent = char.char;
                        if (sprite.backgroundColor) {
                            pixel.style.backgroundColor = sprite.backgroundColor;
                        }
                        if (char.backgroundColor)
                            pixel.style.backgroundColor = char.backgroundColor;
                        pixel.style.color = char.color;
                    }
                });
            }
            if (sprite.jumpHeight && sprite.jumpAscending) {
                sprite.yPos -= 1;
                sprite.jumpHeight -= 1;
            }
            if (sprite.jumpHeight === 0 && sprite.jumpAscending) {
                sprite.jumpAscending = false;
                sprite.jumpDescending = true;
                sprite.jumpHeight = null;
            }
            if (sprite.jumpDescending) {
                if (typeof sprite.fallHeight === 'number') {
                    sprite.yPos += 1;
                    sprite.fallHeight -= 1;
                }
                if (sprite.fallHeight === 0) {
                    sprite.jumpDescending = false;
                    sprite.fallHeight = null;
                }
            }
            sprite.updateFrame(game.currentTick);
        });
    }
};
export default updateSprites;
