import Game from '../game/game.js';
import Sprite, { sprites } from '../sprite/sprite.js';
type CollisionObjects = {
  spriteOne: Sprite;
  spriteTwo: Sprite;
  currentlyColliding: boolean;
  triggerOnceWhileTrue: boolean;
  callback: () => any;
}[];

const collisionObjects: CollisionObjects = [];
const onCollision = (
  spriteOne: Sprite,
  spriteTwo: Sprite,
  triggerOnceWhileTrue: boolean,
  callback: () => any
) =>
  collisionObjects.push({
    spriteOne,
    spriteTwo,
    currentlyColliding: false,
    triggerOnceWhileTrue,
    callback
  });

const detectCollisions = () => {
  collisionObjects.forEach((obj) => {
    if (obj.currentlyColliding) {
      if (!areColliding(obj.spriteOne, obj.spriteTwo)) {
        obj.currentlyColliding = false;
      }
    }
  });
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

const areColliding = (spriteOne: Sprite, spriteTwo: Sprite): boolean => {
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

const callCallbackIfExists = (spriteOne: Sprite, spriteTwo: Sprite) => {
  collisionObjects.forEach((obj) => {
    if (
      (obj.spriteOne === spriteOne && obj.spriteTwo === spriteTwo) ||
      (obj.spriteOne === spriteTwo && obj.spriteTwo === spriteOne)
    ) {
      if (!obj.triggerOnceWhileTrue) {
        obj.callback();
      } else if (obj.triggerOnceWhileTrue && !obj.currentlyColliding) {
        obj.callback();
      }
      obj.currentlyColliding = true;
    }
  });
};

export { detectCollisions, onCollision };
