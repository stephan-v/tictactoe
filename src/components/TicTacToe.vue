<template>
  <div class="tictactoe">
    <div class="scoreboard">
      <Score icon="x"></Score>
      <CurrentPlayer></CurrentPlayer>
      <Score icon="o"></Score>
    </div>
    <Board></Board>
  </div>
</template>

<script>
import Board from "./Board.vue";
import CurrentPlayer from "./CurrentPlayer.vue";
import Score from "./Score.vue";

export default {
  data () {
    return {
      matchNo: 0,
      amountOfWins: {
        o: 0,
        x: 0
      }
    }
  },
  components: {
    Board,
    CurrentPlayer,
    Score
  }
}
</script>
<style>
  .scoreboard {
    align-items: center;
    background: lightblue;
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 10px;
  }
</style>