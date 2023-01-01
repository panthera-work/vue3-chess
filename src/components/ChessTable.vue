<!-- Доска 8х8 -->
<template>
    <div class="chess_table">
        <chess-place v-for="cell in board.cells" @click="click(cell)" :place-info="cell"/>
    </div>
</template>

<script>
import ChessPlace from "@/components/ChessPlace.vue";
import ChessBoard from "@/models/ChessBoard";
import Pawn from "@/models/Pawn";
import Queen from "@/models/Queen";
import King from "@/models/King";
import Elephant from "@/models/Elephant";
import Horse from "@/models/Horse";
import Rook from "@/models/Rook";
import Player from "@/models/Player";

export default {
    components: {ChessPlace},
    data() {
        return {
            board: new ChessBoard(),
            targetCell: null,
            player1: new Player('one', 0),
            player2: new Player('two', 1),
            playerColor: 0,
        }
    },
    methods: {
        // Выбор ячейки для хода
        click(cell) {
            if (cell.isTarget){
                cell.isTarget = false;
                this.board.cells.forEach(newCell => {
                    newCell.canMove = false;
                })
            }
            else if (cell.canMove) {
                this.targetCell.moveFigure(cell);
                this.playerHod = this.playerHod === 0? 1 : 0;
                this.board.cells.forEach(newCell => {
                    newCell.canMove = false;
                    newCell.isTarget = false;
                })


            }
            else if (cell.figure){
                if (cell.figure.color !== this.playerHod) return;
                this.board.cells.forEach(cell => {
                    cell.isTarget = false;
                    cell.canMove = false;
                })
                cell.isTarget = true;
                this.targetCell = cell;

                this.board.cells.forEach(newCell => {
                    if (cell.figure.canMove(newCell)){
                        newCell.canMove = true;
                    }
                })


            }
            else {
                document.body.setAttribute('data-overlay', 'error');
                setTimeout(() => {
                    document.body.removeAttribute('data-overlay');
                }, 180)
            }
        },




        // Растановка фигур
        arrangePawn() {
            for (let i = 0; i < 8; i++){
              const cell = this.board.getCell(1, i);
              cell.addFigure(new Pawn(cell, 1));
            }
            for (let i = 0; i < 8; i++){
              const cell = this.board.getCell(6, i);
              cell.addFigure(new Pawn(cell, 0));
            }
        },
        arrangeQueen() {
            const cellBlackQueen = this.board.getCell(0, 4);
            const cellWhiteQueen = this.board.getCell(7, 4);
            cellBlackQueen.addFigure(new Queen(cellBlackQueen, 1));
            cellWhiteQueen.addFigure(new Queen(cellWhiteQueen, 0));
        },
        arrangeKing() {
            const cellBlackKing = this.board.getCell(0, 3);
            const cellWhiteKing = this.board.getCell(7, 3);
            cellBlackKing.addFigure(new King(cellBlackKing, 1));
            cellWhiteKing.addFigure(new King(cellWhiteKing, 0));
        },
        arrangeElephant() {
            const cellBlackLeftElephant = this.board.getCell(0, 2);
            const cellBlackRightElephant = this.board.getCell(0, 5);
            const cellWhiteLeftElephant = this.board.getCell(7, 2);
            const cellWhiteRightElephant = this.board.getCell(7, 5);
            cellBlackLeftElephant.addFigure(new Elephant(cellBlackLeftElephant, 1));
            cellBlackRightElephant.addFigure(new Elephant(cellBlackRightElephant, 1));
            cellWhiteLeftElephant.addFigure(new Elephant(cellWhiteLeftElephant, 0));
            cellWhiteRightElephant.addFigure(new Elephant(cellWhiteRightElephant, 0));
        },
        arrangeHorse() {
            const cellBlackLeftHorse = this.board.getCell(0, 1);
            const cellBlackRightHorse = this.board.getCell(0, 6);
            const cellWhiteLeftHorse = this.board.getCell(7, 1);
            const cellWhiteRightHorse = this.board.getCell(7, 6);
            cellBlackLeftHorse.addFigure(new Horse(cellBlackLeftHorse, 1));
            cellBlackRightHorse.addFigure(new Horse(cellBlackRightHorse, 1));
            cellWhiteLeftHorse.addFigure(new Horse(cellWhiteLeftHorse, 0));
            cellWhiteRightHorse.addFigure(new Horse(cellWhiteRightHorse, 0));
        },
        arrangeRook() {
            const cellBlackLeftRook = this.board.getCell(0, 0);
            const cellBlackRightRook = this.board.getCell(0, 7);
            const cellWhiteLeftRook = this.board.getCell(7, 0);
            const cellWhiteRightRook = this.board.getCell(7, 7);
            cellBlackLeftRook.addFigure(new Rook(cellBlackLeftRook, 1));
            cellBlackRightRook.addFigure(new Rook(cellBlackRightRook, 1));
            cellWhiteLeftRook.addFigure(new Rook(cellWhiteLeftRook, 0));
            cellWhiteRightRook.addFigure(new Rook(cellWhiteRightRook, 0));
        },

    },
    computed: {

    },
    mounted() {
        // Раставляем фигуры
        this.arrangePawn();
        this.arrangeQueen();
        this.arrangeKing();
        this.arrangeElephant();
        this.arrangeHorse();
        this.arrangeRook();
    }
}
</script>

<style scoped>
.chess_table{
    border: 20px solid #4f2610;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 0;
}
</style>