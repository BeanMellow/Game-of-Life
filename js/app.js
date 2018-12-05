document.addEventListener('DOMContentLoaded', () => {

    const board = document.querySelector('#board');

    function GameOfLife(boardWidth = 50, boardHeight = 50, cellSize = 10) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.cells = [];
        this.createBoard = function () {
            const cellNum = this.width * this.height;
            board.style.width = `${this.width * cellSize}px`;
            board.style.height = `${this.height * cellSize}px`;
            for (let i = 0; i < cellNum; i++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = cellSize + 'px';
                cell.style.height = cellSize + 'px';
                // dataset for cell index
                cell.dataset.index = i.toString();
                // event LIVE/DIE on click
                cell.addEventListener('click', (event) => {
                    const cell = event.target;
                    cell.classList.toggle('live');
                });
                board.appendChild(cell);
            }
            // fill cells property
            this.cells = document.querySelectorAll('.cell');
        };
        this.neighbours = function (index) {
        //    TODO
        };
        this.setCellState = function(x, y, state) {
            const index = x + y * this.width;
            if (state === 'live') {
                this.cells[index].classList.add('live');
            } else {
                this.cells[index].classList.remove('live');
            }
        };
        // this.firstGlider = function (x, y) {
        //     this.setCellState(x, y, 'live');
        // };
    }

    const game = new GameOfLife();
    game.createBoard();
    game.setCellState(3, 3, 'live');


});

