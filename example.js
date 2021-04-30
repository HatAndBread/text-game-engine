import * as s from './dist/index.js';

const gameWidth = 50;
const gameHeight = 20;
const clouds = [];
for (let i = 0; i < 30; i++) {
  const cloud = new s.Sprite({
    xPos: Math.floor(Math.random() * gameWidth),
    yPos: Math.floor(Math.random() * gameHeight),
    zIndex: 1
  });
  cloud.addAnimation('main', [[{ char: '☁️', color: 'snow', x: 0, y: 0 }]]);
  cloud.setCurrentAnimation('main');
  clouds.push(cloud);
}

const santa = new s.Sprite({
  xPos: 5,
  yPos: gameHeight - 10,
  zIndex: 2,
  feelGravity: true
});
santa.addAnimation('main', [
  [
    { char: '🎅', x: 1, y: 0 },
    { char: '━', color: 'red', x: 0, y: 1 },
    { char: '▓', color: 'red', x: 1, y: 1, backgroundColor: 'white' },
    { char: '━', color: 'red', x: 2, y: 1 },
    { char: '║', color: 'red', x: 1, y: 2 }
  ]
]);
santa.setCurrentAnimation('main');

const platform = new s.Sprite({
  xPos: 20,
  yPos: 15,
  backgroundColor: 'yellow',
  platform: 'true'
});
platform.addAnimation('main', [
  [
    { char: '▒', color: 'green', x: 0, y: 0 },
    { char: '▒', color: 'green', x: 1, y: 0, backgroundColor: 'blue' },
    { char: '▒', color: 'green', x: 2, y: 0 }
  ]
]);
platform.setCurrentAnimation('main');

const ground = new s.Sprite({
  xPos: 0,
  yPos: gameHeight - 1,
  platform: true,
  backgroundColor: 'brown'
});

const groundData = [];
for (let i = 0; i < gameWidth; i++) {
  groundData.push({ char: '░', color: 'green', x: i, y: 0 });
}
ground.addAnimation('main', [groundData]);
ground.setCurrentAnimation('main');

s.onKeyUp(' ', () => {
  santa.jump(10);
});

s.onKeyDown('ArrowRight', () => (santa.xPos += 1));
s.onKeyDown('ArrowLeft', () => (santa.xPos -= 1));

const game = new s.Game({
  width: gameWidth,
  height: gameHeight,
  pixelSize: (window.innerWidth / gameWidth) * 1.6,
  backgroundColor: 'deepskyblue'
});

game.everyTick((tick) => {
  if (tick % 10 === 0) clouds.forEach((cloud) => (cloud.xPos -= 1));

  clouds.forEach((cloud) => {
    if (cloud.xPos < 0) {
      cloud.xPos = gameWidth;
      cloud.yPos = Math.floor(Math.random() * gameHeight);
    }
  });
});
