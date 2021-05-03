# UTF-8 Game Engine

This is a JavaScript / TypeScript library for building web browser games entirely out of UTF-8 text characters.

Because... Why not? 🤷‍♀️
<a href="https://utf-8-game-engine-example.netlify.app/">Example game</a>

# Installation

```
npm i utf-8-game
```

# Use

```javascript
import * as s from 'utf-8-game';

// create a new game 50 chars wide and 20 chars high

const gameWidth = 50;
const gameHeight = 20;

const game = new s.Game({
  width: gameWidth,
  height: gameHeight,
  pixelSize: (window.innerWidth / gameWidth) * 1.6,
  backgroundColor: 'rgb(0,0,0)'
});

// create a sprite
const sprite = new s.Sprite({
  xPos: 10,
  yPos: 10,
  animationSpeed: 10,
  zIndex: 1
});

const spriteAnimation = [
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
sprite.addAnimation('main', spriteAnimation);
monsterTwo.setCurrentAnimation('main');
```

Full Documentation 👉 [Exports](modules.md)
