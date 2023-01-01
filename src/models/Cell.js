class Cell{

    constructor(x, y, color, board) {
        this.figure = null; //null || Figure Object
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
    }


    moveFigure(cell){
        if (this.figure?.firstStep){
            this.figure.firstStep = false;
        }
        console.log(cell);
        cell.figure = this.figure;
        this.figure = null;
        cell.figure.cell = cell;
    }

    addFigure(figure){
        this.figure = figure;
    }

    isEmpty() {
        return this.figure === null;
    }

}

export default Cell;