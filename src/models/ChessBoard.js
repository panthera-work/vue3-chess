import Cell from "@/models/Cell";

class ChessBoard{

    constructor() {
        this.cells = []; // ячейки
        this.createCells();
    }

    createCells() {
        //  Заполняет ячейки в конструкторе
        for (let i = 0; i < 8; i++) {
            const line = [];
            for (let j = 0; j < 8; j++) {
                if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)){
                    line.push(new Cell(i, j, 0, this));
                } else {
                    line.push(new Cell(i, j, 1, this));
                }
            }
            this.cells.push(...line);
        }
    }

    copyChessBoard() {
        return this.cells ;
    }

    getCell(x, y){
        return this.cells.filter(cell => cell.x === x && cell.y === y)[0];
    }


}

export default ChessBoard;