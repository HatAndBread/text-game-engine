import Sprite from '../sprite/sprite.js';

export const clickObjects: { sprite: Sprite; callback: () => any }[] = [];

const handleClick = function (e: MouseEvent) {
  if (e.target instanceof HTMLDivElement) {
    const x = e.target.dataset.x ? parseInt(e.target.dataset.x, 10) : undefined;
    const y = e.target.dataset.y ? parseInt(e.target.dataset.y, 10) : undefined;
    if (x && y) {
      clickObjects.forEach((obj) => {
        obj.sprite.currentCoords.forEach((coord) => {
          if (coord.x === x && coord.y === y) {
            obj.callback();
          }
        });
      });
    }
  }
};

export function listenForMouse() {
  document.addEventListener('click', handleClick);
}

export const onClick = (sprite: Sprite, callback: () => any) =>
  clickObjects.push({ sprite, callback });
