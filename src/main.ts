import * as s from './index.js';

const animationOne = [
  [
    { char: '◯', color: 'red', x: 1, y: 0 },
    { char: '▻', color: 'lightblue', x: 2, y: 0 },
    { char: '◢', color: 'red', x: 0, y: 1 },
    { char: '◘', color: 'blue', x: 1, y: 1 },
    { char: '◣', color: 'red', x: 2, y: 1 },
    { char: '╱', color: 'yellow', x: 0, y: 2 },
    { char: '╲', color: 'yellow', x: 2, y: 2 }
  ],
  [
    { char: '◯', color: 'red', x: 1, y: 0 },
    { char: '▻', color: 'yellow', x: 2, y: 0 },
    { char: '◄', color: 'orange', x: 0, y: 1 },
    { char: '◘', color: 'blue', x: 1, y: 1 },
    { char: '►', color: 'aqua', x: 2, y: 1 },
    { char: '╱', color: 'yellow', x: 0, y: 2 },
    { char: '╲', color: 'yellow', x: 2, y: 2 }
  ]
];
const sprite = new s.Sprite({
  xPos: 10,
  yPos: 10,
  zIndex: 1,
  animationSpeed: 12
});

sprite.addAnimation('main', animationOne);
sprite.addAnimation('secondary', [
  [{ char: 'L', color: 'pink', x: 0, y: 0 }],
  [{ char: 'Z', color: 'yellow', x: 1, y: 0 }],
  [{ char: 'P', color: 'yellow', x: 1, y: 0 }],
  [{ char: '🧀', color: 'yellow', x: 4, y: 1 }]
]);
sprite.setCurrentAnimation('main');
const secondSprite = new s.Sprite({
  xPos: 15,
  yPos: 15,
  color: 'yellow',
  backgroundColor: 'orange',
  zIndex: 2,
  animationSpeed: 5
});
secondSprite.addAnimation('two', [[{ char: '✺', color: 'white', x: 0, y: 0 }]]);
secondSprite.setCurrentAnimation('two');

const game = new s.Game({
  width: 50,
  height: 20,
  fps: 5,
  pixelSize: 20,
  sprites: [sprite, secondSprite],
  backgroundColor: 'black',
  keyboardSpeed: 3
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

declare global {
  interface Window {
    game: any;
  }
}

window.game = game;
