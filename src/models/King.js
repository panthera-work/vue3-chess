import Figure from "@/models/Figure";
import whiteKing from '@/assets/wK.png';
import blackKing from '@/assets/bK.png';

class King extends Figure{
    constructor(...args) {
        super(...args);
        this.name = 'king';
        this.image = this.color ? blackKing : whiteKing;
    }

    canMove(cell){
        // abstract method
        if (!super.canMove(cell)) return false;

        if (Math.abs(this.cell.x - cell.x) <= 1 && Math.abs(this.cell.y - cell.y) <= 1){
            return true;
        }

        return false;
    }

}

export default King;