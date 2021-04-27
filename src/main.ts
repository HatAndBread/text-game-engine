import * as s from './index.js';

const animationOne = [
  [
    { char: '👽', color: 'red', x: 1, y: 0 },
    { char: '◢', color: 'red', x: 0, y: 1 },
    { char: '◘', color: 'blue', x: 1, y: 1 },
    { char: '◣', color: 'red', x: 2, y: 1 }
  ],
  [
    { char: '👽', color: 'red', x: 1, y: 0 },
    { char: '◄', color: 'orange', x: 0, y: 1 },
    { char: '◘', color: 'blue', x: 1, y: 1 },
    { char: '►', color: 'aqua', x: 2, y: 1 }
  ]
];
const sprite = new s.Sprite({ xPos: 10, yPos: 10, zIndex: 1 });
sprite.addAnimation('main', animationOne);
sprite.addAnimation('secondary', [
  [{ char: 'L', color: 'pink', x: 0, y: 0 }],
  [{ char: 'Z', color: 'yellow', x: 1, y: 0 }],
  [{ char: 'P', color: 'yellow', x: 1, y: 0 }],
  [{ char: '🧀', color: 'yellow', x: 4, y: 1 }]
]);
sprite.setCurrentAnimation('main');
const game = new s.Game({
  width: 50,
  height: 20,
  fps: 5,
  pixelSize: 20,
  sprites: [sprite],
  backgroundColor: 'black'
});
s.onKeyDown('ArrowUp', () => (sprite.yPos -= 1));
s.onKeyDown('ArrowDown', () => (sprite.yPos += 1));
s.onKeyDown('ArrowLeft', () => (sprite.xPos -= 1));
s.onKeyDown('ArrowRight', () => (sprite.xPos += 1));

s.onKeyUp('ArrowUp', () => {
  console.log('Hi!');
});
game.createCanvas();
game.startLoop();

console.log(game);

declare global {
  interface Window {
    game: any;
  }
}

window.game = game;
