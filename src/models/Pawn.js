import Figure from "@/models/Figure";
import whitePawn from '@/assets/wP.png';
import blackPawn from '@/assets/bP.png';

class Pawn extends Figure{
    constructor(...args) {
        super(...args);
        this.firstStep = true;
        this.image = this.color ? blackPawn : whitePawn;
    }

    canMove(cell) {
        if (!super.canMove(cell)) return false;


        if (cell.y === this.cell.y) {
            if (this.firstStep) {
                if (this.color === 1) {
                    if (cell.x - 1 === this.cell.x) {
                        return cell.isEmpty();
                    } else if (cell.x - 2 === this.cell.x){
                        return cell.isEmpty() && this.cell.board.getCell(cell.x - 1, this.cell.y).isEmpty();
                    }
                } else {
                    if (cell.x + 1 === this.cell.x) {
                        return cell.isEmpty();
                    }else if (cell.x + 2 === this.cell.x){
                        return cell.isEmpty() && this.cell.board.getCell(cell.x + 1, this.cell.y).isEmpty();
                    }
                }
            } else {
                if (this.color === 1) {
                    if (cell.x - 1 === this.cell.x) {
                        return cell.isEmpty();
                    }
                } else {
                    if (cell.x + 1 === this.cell.x) {
                        return cell.isEmpty();
                    }
                }
            }
        } else {
            if (Math.abs(this.cell.y - cell.y) === 1 && Math.abs(this.cell.x - cell.x) === 1){
                if (this.color === 1) {
                    if (cell.x - 1 === this.cell.x) {
                        return !cell.isEmpty();
                    }
                } else {
                    if (cell.x + 1 === this.cell.x) {
                        return !cell.isEmpty();
                    }
                }
            } else {
                return false
            }
        }


        // abstract method
        return false;
    }

}

export default Pawn;