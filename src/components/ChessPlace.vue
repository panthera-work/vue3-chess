<!-- Должен иметь букву и цифру на которой он стоит -->
<template>
    <div class="chess_place" :data-color="placeInfo.color" :data-target="placeInfo.isTarget" :data-can-move="placeInfo.canMove">
        <img v-if="placeInfo.figure" :src="placeInfo.figure.image" alt="">
<!--        {{placeInfo.x}} {{placeInfo.y}}-->
    </div>
</template>

<script>
export default {
    props: {
        placeInfo: {
            type: Object,
            required: true
        },

    },
    methods: {
    },
     mounted() {
     }
}
</script>

<style scoped>
.chess_place{
    height: 100px;
    width: 12.5%;
    display: inline-block;
    border: 1px solid black;
    text-align: center;
    position: relative;
    z-index: 0;
}

.chess_place>img{

}
.chess_place[data-color='0']{
    background: #255a62;
    color: #df8f75;
}
.chess_place[data-color='1']{
    background: #c5bdbd;
}
.chess_place[data-target='true']{
    background: #ce4b0b;
    box-shadow: 2px 2px 10px #ecd0d0;
}
.chess_place[data-can-move='true']{
    background: #16944e;
    box-shadow: 2px 2px 10px #ecd0d0;
}
</style>