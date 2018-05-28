<template>
<div>
  <div v-if="gameHasAWinner">{{getWinner}} won!</div>
  <div v-if="gameIsDraw">The game is a draw!</div>
  <div v-if="!gameIsOver">
      It's now the turn for '{{getCurrentPlayer}}'
  </div>  
</div>
</template>

<script>
import Cell  from '@/components/Cell.vue';

    export default {   
        computed: {
            gameIsOver: function() {
              return this.$store.getters.gameIsOver
            },
            getCurrentPlayer: function() {
              return this.$store.getters.getCurrentPlayer    
            },
            gameHasAWinner: function() {
              return this.$store.getters.gameIsWon
            },
            getWinner: function() {
              return this.$store.getters.getWinner
            },
            gameIsDraw: function() {
              return this.$store.getters.isDraw
            }
        }
    }
</script>