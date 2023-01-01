class Figure{
    constructor(cell, color) {
        this.color = color;
        this.cell = cell;
    }



    isEmptyVertical(cell, number=0){
        if (cell.y !== this.cell.y){
            return false;
        }

        let max = Math.max(this.cell.x, cell.x) - 1;
        let min = Math.min(this.cell.x, cell.x) + 1;
        for (let x = min;x <= max; x++) {
            if (x === this.cell.x) continue;
            if (!this.cell.board.getCell(x, this.cell.y).isEmpty()){
                return false;

            }
        }
        return true;
    }



    isEmptyHorizontal(cell){
        if (cell.x !== this.cell.x){
            return false;
        }

        const max = Math.max(cell.y, this.cell.y) - 1;
        let min = Math.min(cell.y, this.cell.y) + 1;

        for (let y = min;y <= max; y++) {
            if (y === this.cell.y) continue;
            if (!this.cell.board.getCell(this.cell.x, y).isEmpty()) {
                return false;
            }

        }
        return true;
    }


    isEmptyDiagonal(cell){
        if (Math.abs(cell.y - this.cell.y) !== Math.abs(this.cell.x - cell.x)){
            return false;
        }
        let y = this.cell.y;
        let x = this.cell.x;

        while (x !== cell.x && y !== cell.y){
            if (x < cell.x){
                x++;
            } else {
                x--;
            }
            if (y < cell.y){
                y++;
            }else {
                y--;
            }
            if (cell.x === x && cell.y === y) continue;
            if (!this.cell.board.getCell(x, y).isEmpty()) {
                return false;
            }
        }
        return true;
    }





    canMove(cell){
        if (cell.figure?.color === this.color){
            return false;
        }
        return true;
    }


}


export default Figure;