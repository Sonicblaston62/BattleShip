// Grab the board div from HTML
const board = document.getElementById('board');

// Create a new div element

// Give it a border


for (let i = 1; i <=10; i++) {
    const cell = document.createElement('div');
    cell.style.border = '1px solid black';
    cell.style.width = '40px';
    cell.style.height = '40px';
    board.appendChild(cell);
}
