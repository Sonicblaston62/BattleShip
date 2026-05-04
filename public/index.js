function createBoard(id) {
  const board = document.getElementById(id);
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
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
        cell.style.backgroundColor = 'grey';

    });
    board.appendChild(cell);

    }

}
}

createBoard('board1');
createBoard('board2');// Grab the board div from HTML
