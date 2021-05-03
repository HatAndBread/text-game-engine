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
  xPos: -5,
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

const monsterExplosionAnimation = [
  [
    { char: '◀', x: 0, y: 0, color: 'red' },
    { char: '⋚', x: 1, y: 2, color: 'red' },
    { char: '◼', x: 3, y: 2, color: 'red' },
    { char: '▞', x: -3, y: 1, color: 'red' },
    { char: '▙', x: -1, y: -1, color: 'red' },
    { char: '▗', x: 1, y: 0, color: 'red' },
    { char: '⋚', x: 3, y: 4, color: 'red' },
    { char: '👁', x: 2, y: 2, color: 'red' },
    { char: '👁', x: 0, y: 2, color: 'red' }
  ],
  [
    { char: '◀', x: -1, y: -1, color: 'red' },
    { char: '⋚', x: 2, y: 3, color: 'red' },
    { char: '◼', x: 2, y: 1, color: 'red' },
    { char: '▞', x: -2, y: 2, color: 'red' },
    { char: '▙', x: 0, y: 0, color: 'red' },
    { char: '▗', x: 0, y: -1, color: 'red' },
    { char: '⋚', x: 2, y: 4, color: 'red' },
    { char: '👁', x: 1, y: 1, color: 'red' },
    { char: '👁', x: 1, y: 3, color: 'red' }
  ],
  [
    { char: '◀', x: -2, y: -2, color: 'red' },
    { char: '⋚', x: 3, y: 4, color: 'red' },
    { char: '◼', x: 2, y: 1, color: 'red' },
    { char: '▞', x: -1, y: 0, color: 'red' },
    { char: '▙', x: 1, y: 1, color: 'red' },
    { char: '▗', x: -1, y: -2, color: 'red' },
    { char: '⋚', x: 1, y: 3, color: 'red' },
    { char: '👁', x: 0, y: 0, color: 'red' },
    { char: '👁', x: 2, y: 4, color: 'red' }
  ],
  [
    { char: '◀', x: 1, y: -3, color: 'red' },
    { char: '⋚', x: 2, y: 2, color: 'red' },
    { char: '◼', x: 4, y: 1, color: 'red' },
    { char: '▞', x: -1, y: 3, color: 'red' },
    { char: '▙', x: -2, y: 1, color: 'red' },
    { char: '▗', x: -3, y: 1, color: 'red' },
    { char: '⋚', x: 1, y: 3, color: 'red' },
    { char: '👁', x: -1, y: -1, color: 'red' },
    { char: '👁', x: 3, y: 5, color: 'red' }
  ]
];
const monsterTwoExplosionAnimation = [
  [
    { char: '◀', x: 0, y: 0, color: 'red' },
    { char: '⋚', x: 1, y: 2, color: 'red' },
    { char: '◼', x: 3, y: 2, color: 'red' },
    { char: '▞', x: -3, y: 1, color: 'red' },
    { char: '▙', x: -1, y: -1, color: 'red' },
    { char: '▗', x: 1, y: 0, color: 'red' },
    { char: '⋚', x: 3, y: 4, color: 'red' },
    { char: '👀', x: 2, y: 2, color: 'red' }
  ],
  [
    { char: '◀', x: -1, y: -1, color: 'red' },
    { char: '⋚', x: 2, y: 3, color: 'red' },
    { char: '◼', x: 2, y: 1, color: 'red' },
    { char: '▞', x: -2, y: 2, color: 'red' },
    { char: '▙', x: 0, y: 0, color: 'red' },
    { char: '▗', x: 0, y: -1, color: 'red' },
    { char: '⋚', x: 2, y: 4, color: 'red' },
    { char: '👀', x: 1, y: 1, color: 'red' }
  ],
  [
    { char: '◀', x: -2, y: -2, color: 'red' },
    { char: '⋚', x: 3, y: 4, color: 'red' },
    { char: '◼', x: 2, y: 1, color: 'red' },
    { char: '▞', x: -1, y: 0, color: 'red' },
    { char: '▙', x: 1, y: 1, color: 'red' },
    { char: '▗', x: -1, y: -2, color: 'red' },
    { char: '⋚', x: 1, y: 3, color: 'red' },
    { char: '👀', x: 0, y: 0, color: 'red' }
  ],
  [
    { char: '◀', x: 1, y: -3, color: 'red' },
    { char: '⋚', x: 2, y: 2, color: 'red' },
    { char: '◼', x: 4, y: 1, color: 'red' },
    { char: '▞', x: -1, y: 3, color: 'red' },
    { char: '▙', x: -2, y: 1, color: 'red' },
    { char: '▗', x: -3, y: 1, color: 'red' },
    { char: '⋚', x: 1, y: 3, color: 'red' },
    { char: '👀', x: -1, y: -1, color: 'red' }
  ]
];

const monsterTwo = new s.Sprite({
  xPos: gameWidth + 10,
  yPos: Math.floor(Math.random() * gameHeight - 6),
  animationSpeed: 10
});
const monsterTwoAnimation = [
  [
    { char: '∭', x: 1, y: 0, color: 'orange' },
    { char: '◢', x: 0, y: 1, color: 'yellow' },
    { char: '👀', x: 1, y: 1, backgroundColor: 'yellow', color: 'yellow' },
    { char: '◣', x: 2, y: 1, color: 'yellow' },
    { char: '▀', x: 1, y: 2, color: 'yellow' }
  ],
  [
    { char: '∭', x: 1, y: 0, color: 'red' },
    { char: '◀', x: 0, y: 1, color: 'yellow' },
    { char: '👀', x: 1, y: 1, backgroundColor: 'yellow', color: 'yellow' },
    { char: '►', x: 2, y: 1, color: 'yellow' },
    { char: '▅', x: 1, y: 2, color: 'yellow' }
  ]
];
monsterTwo.addAnimation('main', monsterTwoAnimation);
monsterTwo.setCurrentAnimation('main');

const monsterExplosion = new s.Sprite({
  xPos: -200,
  yPos: -200,
  animationSpeed: 10
});
monsterExplosion.addAnimation('main', monsterExplosionAnimation);
monsterExplosion.setCurrentAnimation('main');
const monsterTwoExplosion = new s.Sprite({
  xPos: -200,
  yPos: -200,
  animationSpeed: 10
});
monsterTwoExplosion.addAnimation('main', monsterTwoExplosionAnimation);
monsterTwoExplosion.setCurrentAnimation('main');
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

const platforms = [];

for (let i = 0; i < 4; i++) {
  const platform = new s.Sprite({
    xPos: i * 12 + 3,
    yPos: Math.floor(Math.random() * (gameHeight - 4)) + 2,
    backgroundColor: 'brown',
    platform: 'true'
  });
  platform.addAnimation('main', [
    [
      { char: '▒', color: 'green', x: 0, y: 0 },
      { char: '▒', color: 'green', x: 1, y: 0 },
      { char: '▒', color: 'green', x: 2, y: 0 },
      { char: '▒', color: 'green', x: 3, y: 0 },
      { char: '▒', color: 'green', x: 4, y: 0 },
      { char: '▒', color: 'green', x: 5, y: 0 },
      { char: '▒', color: 'green', x: 6, y: 0 }
    ]
  ]);
  platform.setCurrentAnimation('main');
  platforms.push({
    ascending: Math.floor(Math.random() * 2) ? true : false,
    sprite: platform
  });
}

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

const bomb = new s.Sprite({
  xPos: -210,
  yPos: -210,
  zIndex: 5,
  feelGravity: true
});
bomb.addAnimation('main', [[{ char: '💣', x: 0, y: 0 }]]);
bomb.setCurrentAnimation('main');
s.onCollision(bomb, monsterOne, true, () => {
  bomb.currentFrame = 0;
  bombExplosion.xPos = monsterOne.xPos;
  bombExplosion.yPos = monsterOne.yPos;
  monsterExplosion.currentFrame = 0;
  monsterExplosion.xPos = monsterOne.xPos;
  monsterExplosion.yPos = monsterOne.yPos;
  monsterOne.xPos = 1000;
});

s.onCollision(bomb, monsterTwo, true, () => {
  bomb.currentFrame = 0;
  bombExplosion.xPos = monsterTwo.xPos;
  bombExplosion.yPos = monsterTwo.yPos;
  monsterTwoExplosionAnimation.currentFrame = 0;
  monsterTwoExplosion.xPos = monsterTwo.xPos;
  monsterTwoExplosion.yPos = monsterTwo.yPos;
  monsterTwo.xPos = -1000;
});

const bombExplosionAnimation = [
  [
    { char: '▓', x: -1, y: 0, color: 'yellow' },
    { char: '▓', x: 0, y: 0, color: 'orange' },
    { char: '▓', x: 1, y: 0, color: 'yellow' }
  ],
  [
    { char: '▓', x: -1, y: -1, color: 'orange' },
    { char: '▓', x: 0, y: -1, color: 'orange' },
    { char: '▓', x: 1, y: -1, color: 'orange' },
    { char: '▓', x: -1, y: 0, color: 'orange' },
    { char: '▓', x: 0, y: 0, color: 'red' },
    { char: '▓', x: 1, y: 0, color: 'orange' },
    { char: '▓', x: -1, y: 1, color: 'orange' },
    { char: '▓', x: 0, y: 1, color: 'orange' },
    { char: '▓', x: 1, y: 1, color: 'orange' }
  ],
  [
    { char: '▓', x: -2, y: -2, color: 'orange' },
    { char: '▓', x: -1, y: -2, color: 'orange' },
    { char: '▓', x: 0, y: -2, color: 'orange' },
    { char: '▓', x: 1, y: -2, color: 'orange' },
    { char: '▓', x: 2, y: -2, color: 'orange' },
    { char: '▓', x: -2, y: -1, color: 'orange' },
    { char: '▓', x: -1, y: -1, color: 'red' },
    { char: '▓', x: 0, y: -1, color: 'red' },
    { char: '▓', x: 1, y: -1, color: 'red' },
    { char: '▓', x: 2, y: -1, color: 'orange' },
    { char: '▓', x: -2, y: 0, color: 'orange' },
    { char: '▓', x: -1, y: 0, color: 'red' },
    { char: '▓', x: 0, y: 0, color: 'red' },
    { char: '▓', x: 1, y: 0, color: 'red' },
    { char: '▓', x: 2, y: 0, color: 'orange' },
    { char: '▓', x: -2, y: 1, color: 'orange' },
    { char: '▓', x: -1, y: 1, color: 'orange' },
    { char: '▓', x: 0, y: 1, color: 'orange' },
    { char: '▓', x: 1, y: 1, color: 'orange' },
    { char: '▓', x: 2, y: 1, color: 'orange' }
  ]
];
const bombExplosion = new s.Sprite({ xPos: -200, yPos: 10 });
bombExplosion.addAnimation('main', bombExplosionAnimation);
bombExplosion.setCurrentAnimation('main');

const bullets = [];
let currentBullet = 0;
for (let i = 0; i < 10; i++) {
  const bullet = new s.Sprite({ xPos: -13, yPos: -13, zIndex: 6 });
  bullet.addAnimation('main', [
    [{ char: '⊛', color: 'red', x: 0, y: 0 }],
    [{ char: '⊗', color: 'purple', x: 0, y: 0 }],
    [{ char: '⊕', color: 'green', x: 0, y: 0 }]
  ]);
  bullet.setCurrentAnimation('main');
  bullets.push(bullet);
}

bullets.forEach((bullet) => {
  s.onCollision(bullet, monsterOne, true, () => {
    bullet.xPos = -200;
    monsterExplosion.currentFrame = 0;
    monsterExplosion.xPos = monsterOne.xPos;
    monsterExplosion.yPos = monsterOne.yPos;
    monsterOne.xPos = 1000;
  });
  s.onCollision(bullet, monsterTwo, true, () => {
    bullet.xPos = -200;
    monsterTwoExplosionAnimation.currentFrame = 0;
    monsterTwoExplosion.xPos = monsterTwo.xPos;
    monsterTwoExplosion.yPos = monsterTwo.yPos;
    monsterTwo.xPos = -1000;
  });
});

s.onKeyUp(' ', () => {
  if (santa.currentAnimation === 'facing-right') {
    if (!bomb.currentlyJumping) {
      bomb.xPos = santa.xPos + 3;
      bomb.yPos = santa.yPos + 1;
      bomb.jump(10);
    }
  } else if (santa.currentAnimation === 'facing-left') {
    currentBullet < bullets.length - 1
      ? (currentBullet += 1)
      : (currentBullet = 0);
    bullets[currentBullet].xPos = santa.xPos - 3;
    bullets[currentBullet].yPos = santa.yPos + 1;
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
  if (monsterOne.xPos > gameWidth + 6) {
    monsterOne.xPos = -5 - Math.floor(Math.random() * 20);
    monsterOne.yPos = Math.floor(Math.random() * (gameHeight - 6)) + 2;
  }
  if (monsterTwo.xPos < -6) {
    monsterTwo.xPos = gameWidth + Math.floor(Math.random() * 10);
    monsterTwo.yPos = Math.floor(Math.random() * (gameHeight - 6)) + 2;
  }
  if (!bomb.currentlyJumping) {
    //bomb.xPos = 10000;
  }

  if (tick % 2 === 0) {
    if (bomb.currentlyJumping) bomb.xPos += 1;
    bullets.forEach((bullet) => {
      bullet.xPos -= 1;
    });
    if (monsterExplosion.currentFrame === 3) {
      monsterExplosion.xPos = 1000;
    }
    if (monsterTwoExplosion.currentFrame === 3) {
      monsterTwoExplosion.xPos = 1000;
    }
  }

  if (tick % 3 === 0) {
    if (bombExplosion.currentFrame === 2) {
      bombExplosion.xPos = -400;
      bombExplosion.yPos = -400;
    }
  }

  if (tick % 5 === 0) {
    monsterOne.xPos += 1;
    monsterTwo.xPos -= 1;
  }
  if (tick % 10 === 0) {
    platforms.forEach((platform) => {
      if (platform.sprite.yPos <= 3) {
        platform.ascending = false;
      }
      if (platform.sprite.yPos >= gameHeight - 3) {
        platform.ascending = true;
      }
      if (platform.ascending) {
        platform.sprite.yPos -= 1;
      } else {
        platform.sprite.yPos += 1;
      }
    });
  }
  if (tick % 10 === 0) clouds.forEach((cloud) => (cloud.xPos -= 1));
  if (bomb.yPos === gameHeight - 2) {
    bombExplosion.xPos = bomb.xPos;
    bombExplosion.yPos = bomb.yPos;
    bombExplosion.currentFrame = 0;
    bomb.xPos = 10000;
  }

  clouds.forEach((cloud) => {
    if (cloud.xPos < 0) {
      cloud.xPos = gameWidth;
      cloud.yPos = Math.floor(Math.random() * gameHeight);
    }
  });
});
