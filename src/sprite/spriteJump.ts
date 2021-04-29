import Sprite from './sprite.js';
const handleJump = (sprite: Sprite) => {
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
};

export default handleJump;
