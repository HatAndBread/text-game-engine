const detectCollisions = (game) => {
    if (game.sprites && game.sprites.length > 1) {
        for (let i = 0; i < game.sprites.length; i++) {
            for (let j = 0; j < game.sprites.length; j++) {
                if (i !== j) {
                    //isColliding(game.sprites[i], game.sprites[j]);
                    const [spriteOne, spriteTwo] = [game.sprites[i], game.sprites[j]];
                    if (isColliding(spriteOne, spriteTwo)) {
                        console.log('Collision detected! 🎉', spriteOne.currentCoords, spriteTwo.currentCoords);
                    }
                }
            }
        }
    }
};
const isColliding = (spriteOne, spriteTwo) => {
    for (let i = 0; i < spriteOne.currentCoords.length; i++) {
        for (let j = 0; j < spriteTwo.currentCoords.length; j++) {
            if (spriteOne.currentCoords[i].x === spriteTwo.currentCoords[j].x &&
                spriteOne.currentCoords[i].y === spriteTwo.currentCoords[j].y) {
                return true;
            }
        }
    }
    return false;
};
export { detectCollisions };
