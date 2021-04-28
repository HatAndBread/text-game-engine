import Sprite, { sprites } from '../sprite/sprite.js';
const collisionObjects = [];
const onCollision = (spriteOne, spriteTwo, callback) => {
    if ((spriteOne instanceof Sprite && spriteTwo instanceof Sprite) ||
        (typeof spriteOne === 'string' && typeof spriteTwo === 'string')) {
        collisionObjects.push({ spriteOne, spriteTwo, callback });
    }
    else if (typeof spriteOne === 'string') {
        collisionObjects.push({
            spriteOne: spriteTwo,
            spriteTwo: spriteOne,
            callback
        });
    }
    else {
        collisionObjects.push({ spriteOne, spriteTwo, callback });
    }
};
const detectCollisions = (game) => {
    if (sprites && sprites.length > 1) {
        for (let i = 0; i < sprites.length; i++) {
            for (let j = 0; j < sprites.length; j++) {
                if (i !== j && areColliding(sprites[i], sprites[j])) {
                    callCallbackIfExists(sprites[i], sprites[j]);
                }
            }
        }
    }
};
const areColliding = (spriteOne, spriteTwo) => {
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
const callCallbackIfExists = (spriteOne, spriteTwo) => {
    collisionObjects.forEach((obj) => {
        if (obj.spriteOne instanceof Sprite && obj.spriteTwo instanceof Sprite) {
            if ((obj.spriteOne === spriteOne && obj.spriteTwo === spriteTwo) ||
                (obj.spriteOne === spriteTwo && obj.spriteTwo === spriteOne)) {
                obj.callback();
            }
        }
        else if (typeof obj.spriteOne === 'string' &&
            typeof obj.spriteTwo === 'string') {
            if ((obj.spriteOne === spriteOne.family &&
                obj.spriteTwo === spriteTwo.family) ||
                (obj.spriteOne === spriteTwo.family &&
                    obj.spriteTwo === spriteOne.family)) {
                obj.callback();
            }
        }
        else {
            if ((obj.spriteOne === spriteOne && obj.spriteTwo === spriteTwo.family) ||
                (obj.spriteOne === spriteTwo && obj.spriteTwo === spriteOne.family)) {
                obj.callback();
            }
        }
    });
};
export { detectCollisions, onCollision };
