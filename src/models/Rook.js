import Figure from "@/models/Figure";
import whiteRook from '@/assets/wR.png';
import blackRook from '@/assets/bR.png';

class Rook extends Figure{
    constructor(...args) {
        super(...args);
        this.image = this.color ? blackRook : whiteRook;
    }


    canMove(cell){
        if (!super.canMove(cell)) return false;

        if (super.isEmptyVertical(cell)){
            return true;
        }

        if (super.isEmptyHorizontal(cell)){
            return true;
        }


        return false;
    }

}

export default Rook;