function createBoard(id) {
    const board = document.getElementById(id);
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(10, 50px)';


for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {

    const cell = document.createElement('div');
    cell.style.border = '2px solid black';
    cell.style.margin = '5px'
    cell.style.width = '40px';
    cell.style.height = '40px';
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.addEventListener('click', function() {
      if (selectedSize !== null) {
        placeShip(cell.dataset.row, cell.dataset.col, selectedSize);
      }
    });

    board.appendChild(cell);
    }
}
}

createBoard('board1');
createBoard('board2');// Grab the board div from HTML
const ships = document.querySelectorAll('.ship');
let selectedSize = null;

ships.forEach(function(ship) {
  ship.addEventListener('click', function() {
    selectedSize = ship.dataset.size;
    console.log('selected size:', selectedSize);
  });
});
function placeShip(startRow, startCol, size) {
  size = parseInt(size);
  startRow = parseInt(startRow);
  startCol = parseInt(startCol);
  
  if (startCol + size > 10) return; // out of bounds
  
  for (let i = 0; i < size; i++) {
    const cell = document.querySelector(`[data-row="${startRow}"][data-col="${startCol + i}"]`);
    cell.style.backgroundColor = 'grey';
  }
}