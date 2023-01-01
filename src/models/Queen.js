import Figure from "@/models/Figure";
import whiteQueen from '@/assets/wQ.png';
import blackQueen from '@/assets/bQ.png';

class Queen extends Figure{
    constructor(...args) {
        super(...args);
        this.image = this.color ? blackQueen : whiteQueen;
    }


    canMove(cell){
        if (!super.canMove(cell)) return false;

        if (super.isEmptyVertical(cell)){
            return true;
        }

        if (super.isEmptyHorizontal(cell)){
            return true;
        }

        if (super.isEmptyDiagonal(cell)){
            return true;
        }



        return false;
        // abstract method
    }

}

export default Queen;