<template>
<div>
  <span v-if="gameHasAWinner">{{getWinner}} won!</span>
  <span v-if="gameIsDraw">The game is a draw!</span>
  <span v-if="!gameIsOver">
      It's now the turn for '{{getCurrentPlayer}}'
  </span>  
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