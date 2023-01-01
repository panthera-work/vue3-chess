import Figure from "@/models/Figure";
import whiteHorse from '@/assets/wN.png';
import blackHorse from '@/assets/bN.png';

class Horse extends Figure{
    constructor(...args) {
        super(...args);
        this.image = this.color ? blackHorse : whiteHorse;
    }


    canMove(cell){
        if (!super.canMove(cell)) return false;

        const differenceX = Math.abs(cell.x - this.cell.x);
        const differenceY = Math.abs(cell.y - this.cell.y);

        if ((differenceX === 2 && differenceY === 1) || (differenceY === 2 && differenceX === 1)){
            return true
        }


        return false;
    }

}

export default Horse;