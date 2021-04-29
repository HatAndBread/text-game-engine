import Sprite from '../sprite/sprite.js';

const clickObjects: {
  sprite: Sprite;
  callback: (coords: { x: number; y: number }) => any;
}[] = [];

const handleClick = function (e: MouseEvent) {
  if (e.target instanceof HTMLDivElement) {
    const x = e.target.dataset.x ? parseInt(e.target.dataset.x, 10) : undefined;
    const y = e.target.dataset.y ? parseInt(e.target.dataset.y, 10) : undefined;
    let callbackFound = false;
    if (x && y) {
      clickObjects.forEach((obj) => {
        obj.sprite.currentCoords.forEach((coord) => {
          if (coord.x === x && coord.y === y) {
            obj.callback({ x, y });
            callbackFound = true;
          }
        });
      });
      if (!callbackFound) {
        clickCallback({ x, y });
      }
    }
    callbackFound = false;
  }
};

export function listenForMouse() {
  document.addEventListener('click', handleClick);
}

export const onSpriteClicked = (
  sprite: Sprite,
  callback: (coords: { x: number; y: number }) => any
) => {
  clickObjects.push({ sprite, callback });
};

let clickCallback = (coords: { x: number; y: number }) => {
  console.log(coords);
};
export const onClick = (
  callback: ({ x, y }: { x: number; y: number }) => any
) => {
  clickCallback = callback;
};
