<template>
    <div v-on:click="onClick()">{{marker}}</div>
</template>

<script>
    export default {
        props : ['position'],
        computed : {
            clickable: function() {
                return this.marker === ''  && !this.$store.getters.gameIsWon;
            },
            marker: function() {
                return this.$store.getters.getMarkByPosition(this.position);
            }
        },
        methods: {
            onClick: function() {            
                if(this.$store.getters.positionIsClickable(this.position)) {
                    this.$store.commit('doMove', this.position);               
                }
            }
        }
    }
</script>

<style scoped>
    div {
        background: lightblue;
        font-size: 110px;
        height: 120px;
        line-height: 110px;
        width: 120px;
    }
</style>