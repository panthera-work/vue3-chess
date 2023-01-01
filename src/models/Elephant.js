import Figure from "@/models/Figure";
import whiteElephant from '@/assets/wB.png';
import blackElephant from '@/assets/bB.png';

class Elephant extends Figure{
    constructor(...args) {
        super(...args);
        this.image = this.color ? blackElephant : whiteElephant;
    }


    canMove(cell){

        if (!super.canMove(cell)) return false;

        if (super.isEmptyDiagonal(cell)){
            return true;
        }



        return false;
    }

}

export default Elephant;