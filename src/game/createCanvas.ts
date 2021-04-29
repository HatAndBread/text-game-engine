import Game from './game.js';

const createCanvas = (game: Game) => {
  game.canvas.style.fontSize = `${game.pixelSize}px`;
  document.body.appendChild(game.canvas);
  game.canvas.id = 'game-canvas';
  game.canvas.style.fontFamily = 'monospace';
  game.canvas.style.backgroundColor = game.backgroundColor;
  game.canvas.style.width = 'fit-content';
  game.canvas.style.lineHeight = '1';
  for (let i = 0; i < game.height; i++) {
    const arr = [];
    const newRow = document.createElement('div');
    newRow.style.display = 'flex';
    newRow.style.padding = '0';
    newRow.style.margin = '0';
    game.canvas.appendChild(newRow);
    for (let j = 0; j < game.width; j++) {
      const newPixel = document.createElement('div');
      newPixel.style.padding = '0px';
      newPixel.style.margin = '0px';
      newPixel.style.height = `${game.pixelSize}px`;
      newPixel.style.width = `${game.pixelSize - game.pixelSize * 0.4}px`;
      newPixel.style.display = 'flex';
      newPixel.style.justifyContent = 'center';
      newPixel.style.textAlign = 'center';
      newPixel.style.cursor = 'default';
      newPixel.dataset.x = `${j}`;
      newPixel.dataset.y = `${i}`;
      newRow.appendChild(newPixel);
      arr.push(newPixel);
    }
    game.rows.push(arr);
  }
};

export default createCanvas;
