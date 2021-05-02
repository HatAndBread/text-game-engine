import * as s from './dist/index.js';

const gameWidth = 50;
const gameHeight = 16;
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
  feelGravity: true,
  animationSpeed: 10
});

const monsterOne = new s.Sprite({
  xPos: 20,
  yPos: 5,
  animationSpeed: 10
});
const monsterOneAnimation = [
  [
    { char: '╷', x: 0, y: -1, color: 'lightgreen' },
    { char: '╷', x: 1, y: -1, color: 'lightgreen' },
    { char: '╷', x: 2, y: -1, color: 'lightgreen' },
    { char: '◀', x: -1, y: 0, color: 'orange' },
    { char: '👁', x: 0, y: 0, backgroundColor: 'lightgreen' },
    { char: '', x: 1, y: 0, backgroundColor: 'lightgreen' },
    { char: '👁', x: 2, y: 0, backgroundColor: 'lightgreen' },
    { char: '▶', x: 3, y: 0, color: 'orange' },
    { char: '◢', x: -1, y: 1, color: 'orange' },
    { char: '', x: 0, y: 1, backgroundColor: 'lightgreen' },
    { char: '👄', x: 1, y: 1, backgroundColor: 'lightgreen' },
    { char: '', x: 2, y: 1, backgroundColor: 'lightgreen' },
    { char: '◣', x: 3, y: 1, color: 'orange' },
    { char: '↯', x: 0, y: 2, color: 'yellow' },
    { char: '↯', x: 2, y: 2, color: 'yellow' }
  ],
  [
    { char: '⋚', x: 0, y: -1, color: 'lightgreen' },
    { char: '⋚', x: 1, y: -1, color: 'lightgreen' },
    { char: '⋚', x: 2, y: -1, color: 'lightgreen' },
    { char: '◢', x: -1, y: 0, color: 'orange' },
    { char: '👁', x: 0, y: 0, backgroundColor: 'lightgreen' },
    { char: '', x: 1, y: 0, backgroundColor: 'lightgreen' },
    { char: '👁', x: 2, y: 0, backgroundColor: 'lightgreen' },
    { char: '◣', x: 3, y: 0, color: 'orange' },
    { char: '◀', x: -1, y: 1, color: 'orange' },
    { char: '', x: 0, y: 1, backgroundColor: 'lightgreen' },
    { char: '👄', x: 1, y: 1, backgroundColor: 'lightgreen' },
    { char: '', x: 2, y: 1, backgroundColor: 'lightgreen' },
    { char: '▶', x: 3, y: 1, color: 'orange' },
    { char: '↯', x: 0, y: 2, color: 'yellow' },
    { char: '↯', x: 2, y: 2, color: 'yellow' }
  ],
  [
    { char: '╽', x: 0, y: -1, color: 'lightgreen' },
    { char: '╽', x: 1, y: -1, color: 'lightgreen' },
    { char: '╽', x: 2, y: -1, color: 'lightgreen' },
    { char: '◀', x: -1, y: 0, color: 'orange' },
    { char: '👁', x: 0, y: 0, backgroundColor: 'lightgreen' },
    { char: '', x: 1, y: 0, backgroundColor: 'lightgreen' },
    { char: '👁', x: 2, y: 0, backgroundColor: 'lightgreen' },
    { char: '▶', x: 3, y: 0, color: 'orange' },
    { char: '◢', x: -1, y: 1, color: 'orange' },
    { char: '', x: 0, y: 1, backgroundColor: 'lightgreen' },
    { char: '👄', x: 1, y: 1, backgroundColor: 'lightgreen' },
    { char: '', x: 2, y: 1, backgroundColor: 'lightgreen' },
    { char: '◣', x: 3, y: 1, color: 'orange' },
    { char: '↯', x: 0, y: 2, color: 'yellow' },
    { char: '↯', x: 2, y: 2, color: 'yellow' }
  ],
  [
    { char: '⋚', x: 0, y: -1, color: 'lightgreen' },
    { char: '⋚', x: 1, y: -1, color: 'lightgreen' },
    { char: '⋚', x: 2, y: -1, color: 'lightgreen' },
    { char: '◢', x: -1, y: 0, color: 'orange' },
    { char: '👁', x: 0, y: 0, backgroundColor: 'lightgreen' },
    { char: '', x: 1, y: 0, backgroundColor: 'lightgreen' },
    { char: '👁', x: 2, y: 0, backgroundColor: 'lightgreen' },
    { char: '◣', x: 3, y: 0, color: 'orange' },
    { char: '◀', x: -1, y: 1, color: 'orange' },
    { char: '', x: 0, y: 1, backgroundColor: 'lightgreen' },
    { char: '👄', x: 1, y: 1, backgroundColor: 'lightgreen' },
    { char: '', x: 2, y: 1, backgroundColor: 'lightgreen' },
    { char: '▶', x: 3, y: 1, color: 'orange' },
    { char: '↯', x: 0, y: 2, color: 'yellow' },
    { char: '↯', x: 2, y: 2, color: 'yellow' }
  ]
];
monsterOne.addAnimation('main', monsterOneAnimation);
monsterOne.setCurrentAnimation('main');

santa.addAnimation('facing-right', [
  [
    { char: '😃', x: 1, y: 0 },
    { char: '━', color: 'red', x: 0, y: 1 },
    { char: '▓', color: 'red', x: 1, y: 1, backgroundColor: 'white' },
    { char: '━', color: 'red', x: 2, y: 1 },
    { char: '💣', color: 'black', x: 3, y: 1 },
    { char: '║', color: 'red', x: 1, y: 2 }
  ],
  [
    { char: '😄', x: 1, y: 0 },
    { char: '━', color: 'red', x: 0, y: 1 },
    { char: '▓', color: 'red', x: 1, y: 1, backgroundColor: 'white' },
    { char: '━', color: 'red', x: 2, y: 1 },
    { char: '💣', color: 'black', x: 3, y: 1 },
    { char: '║', color: 'red', x: 1, y: 2 }
  ]
]);
santa.addAnimation('facing-left', [
  [
    { char: '😃', x: 1, y: 0 },
    { char: '━', color: 'red', x: 0, y: 1 },
    { char: '▓', color: 'red', x: 1, y: 1, backgroundColor: 'white' },
    { char: '━', color: 'red', x: 2, y: 1 },
    { char: '🔫', color: 'black', x: -1, y: 1 },
    { char: '║', color: 'red', x: 1, y: 2 }
  ],
  [
    { char: '😄', x: 1, y: 0 },
    { char: '━', color: 'red', x: 0, y: 1 },
    { char: '▓', color: 'red', x: 1, y: 1, backgroundColor: 'white' },
    { char: '━', color: 'red', x: 2, y: 1 },
    { char: '🔫', color: 'black', x: -1, y: 1 },
    { char: '║', color: 'red', x: 1, y: 2 }
  ]
]);
santa.setCurrentAnimation('facing-right');

const platform = new s.Sprite({
  xPos: 20,
  yPos: 12,
  backgroundColor: 'brown',
  platform: 'true'
});
platform.addAnimation('main', [
  [
    { char: '▒', color: 'green', x: 0, y: 0 },
    { char: '▒', color: 'green', x: 1, y: 0 },
    { char: '▒', color: 'green', x: 2, y: 0 },
    { char: '▒', color: 'green', x: 3, y: 0 },
    { char: '▒', color: 'green', x: 4, y: 0 }
  ]
]);
platform.setCurrentAnimation('main');

const platform2 = new s.Sprite({
  xPos: 30,
  yPos: 10,
  backgroundColor: 'brown',
  platform: 'true'
});
platform2.addAnimation('main', [
  [
    { char: '▒', color: 'green', x: 0, y: 0 },
    { char: '▒', color: 'green', x: 1, y: 0 },
    { char: '▒', color: 'green', x: 2, y: 0 },
    { char: '▒', color: 'green', x: 3, y: 0 },
    { char: '▒', color: 'green', x: 4, y: 0 }
  ]
]);
platform2.setCurrentAnimation('main');

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

s.onKeyUp('ArrowUp', () => {
  santa.jump(8);
});

const bomb = new s.Sprite({ xPos: 10, yPos: 10, zIndex: 5 });
bomb.addAnimation('main', [[{ char: '💣', x: 0, y: 0 }]]);
bomb.setCurrentAnimation('main');

let bulletShot = false;
const bullet = new s.Sprite({ xPos: 13, yPos: 13, zIndex: 6 });
bullet.addAnimation('main', [
  [{ char: '⊛', color: 'red', x: 0, y: 0 }],
  [{ char: '⊗', color: 'purple', x: 0, y: 0 }],
  [{ char: '⊕', color: 'green', x: 0, y: 0 }]
]);
bullet.setCurrentAnimation('main');

s.onKeyUp(' ', () => {
  if (santa.currentAnimation === 'facing-right') {
    if (!bomb.currentlyJumping) {
      bomb.xPos = santa.xPos + 3;
      bomb.yPos = santa.yPos + 1;
      bomb.jump(10);
    }
  } else if (santa.currentAnimation === 'facing-left') {
    bullet.xPos = santa.xPos - 3;
    bullet.yPos = santa.yPos + 1;
    bulletShot = true;
  }
});

s.onKeyDown('ArrowRight', () => {
  if (santa.currentAnimation === 'facing-left') {
    santa.setCurrentAnimation('facing-right');
  } else {
    if (santa.xPos < gameWidth - 4) santa.xPos += 1;
  }
});
s.onKeyDown('ArrowLeft', () => {
  if (santa.currentAnimation === 'facing-right') {
    santa.setCurrentAnimation('facing-left');
  } else {
    if (santa.xPos > 1) santa.xPos -= 1;
  }
});

const game = new s.Game({
  width: gameWidth,
  height: gameHeight,
  pixelSize: (window.innerWidth / gameWidth) * 1.6,
  backgroundColor: 'deepskyblue'
});

game.everyTick((tick) => {
  if (!bomb.currentlyJumping) {
    bomb.xPos = -10;
  }
  if (!bulletShot) {
    bullet.xPos = -10;
  }
  if (tick % 2 === 0) {
    if (bomb.currentlyJumping) bomb.xPos += 1;
    if (bulletShot) bullet.xPos -= 1;
  }
  if (tick % 10 === 0) clouds.forEach((cloud) => (cloud.xPos -= 1));

  clouds.forEach((cloud) => {
    if (cloud.xPos < 0) {
      cloud.xPos = gameWidth;
      cloud.yPos = Math.floor(Math.random() * gameHeight);
    }
  });
});
