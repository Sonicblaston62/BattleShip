let isHorizontal = true;
let selectedSize = null;
let currentPlayer = 1; 
let placedShips = [];

function createBoard(id) {
  const board = document.getElementById(id);
  board.style.display = 'grid';
  board.style.gridTemplateColumns = 'repeat(10, 50px)';
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.style.border = '2px solid black';
      cell.style.margin = '5px';
      cell.style.width = '40px';
      cell.style.height = '40px';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', function() {
        const targetBoard = currentPlayer === 1 ? 'board1' : 'board2';
        if (selectedSize !== null && id === targetBoard) {
          if (placedShips.includes(selectedSize)) return;
          placeShip(board, cell.dataset.row, cell.dataset.col, selectedSize);
          placedShips.push(selectedSize);
          selectedSize = null;
        }
      });
      board.appendChild(cell);
    }
  }
}

createBoard('board1');
createBoard('board2');

const ships = document.querySelectorAll('.ship');
ships.forEach(function(ship) {
  ship.addEventListener('click', function() {
    if (placedShips.includes(ship.dataset.size)) return;
    selectedSize = ship.dataset.size;
  });
});

function placeShip(boardElement, startRow, startCol, size) {
  size = parseInt(size);
  startRow = parseInt(startRow);
  startCol = parseInt(startCol);

  if (isHorizontal && startCol + size > 10) return;
  if (!isHorizontal && startRow + size > 10) return;

  for (let i = 0; i < size; i++) {
    const row = isHorizontal ? startRow : startRow + i;
    const col = isHorizontal ? startCol + i : startCol;
    const cell = boardElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.style.backgroundColor = 'grey';
  }
}

document.getElementById('rotate').addEventListener('click', function() {
  isHorizontal = !isHorizontal;
  this.textContent = isHorizontal ? 'Rotate (H)' : 'Rotate (V)';
});

document.getElementById('clear').addEventListener('click', function() {
  placedShips = [];
  selectedSize = null;
  document.querySelectorAll('#board1 div').forEach(function(cell) {
    cell.style.backgroundColor = '';
  });
});
document.getElementById('ready').addEventListener('click', function() {
  if (placedShips.length < 5) {
    alert('Place all ships first');
    return;
  }
  if (currentPlayer === 1) {
    currentPlayer = 2;
    placedShips = [];
    selectedSize = null;
    alert('Player 2, place your ships');
  } else if (currentPlayer === 2) {
    currentPlayer = null;
    alert('Both players ready. Game start!');
    // Shooting commence!
  }
});