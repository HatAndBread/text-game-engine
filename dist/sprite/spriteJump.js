const handleJump = (sprite) => {
    if (sprite.jumpHeight && sprite.jumpAscending) {
        sprite.ticksPassedSinceLastJumpStep += sprite.originalJumpHeight / 3;
        if (sprite.ticksPassedSinceLastJumpStep >= sprite.ticksUntilNextJumpStep) {
            sprite.ticksUntilNextJumpStep += 1;
            sprite.ticksPassedSinceLastJumpStep = sprite.originalJumpHeight / 3;
            sprite.yPos -= 1;
            sprite.jumpHeight -= 1;
        }
    }
    if (sprite.jumpHeight === 0 && sprite.jumpAscending) {
        sprite.ticksPassedSinceLastJumpStep = sprite.originalJumpHeight / 3;
        sprite.jumpAscending = false;
        sprite.jumpDescending = true;
        sprite.jumpHeight = null;
    }
    if (sprite.jumpDescending) {
        if (typeof sprite.fallHeight === 'number') {
            sprite.ticksPassedSinceLastJumpStep += sprite.originalJumpHeight / 4;
            if (sprite.ticksPassedSinceLastJumpStep >= sprite.ticksUntilNextJumpStep) {
                sprite.ticksUntilNextJumpStep -= 1;
                sprite.ticksPassedSinceLastJumpStep = sprite.originalJumpHeight / 3;
                sprite.yPos += 1;
                sprite.fallHeight -= 1;
            }
        }
        if (sprite.fallHeight === 0)
            sprite.stopJump();
    }
};
export default handleJump;
