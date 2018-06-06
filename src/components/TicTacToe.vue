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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Board from "@/components/Board.vue";
import CurrentPlayer from "@/components/CurrentPlayer.vue";
import Score from "@/components/Score.vue";

@Component({
  components: {
    Board,
    CurrentPlayer,
    Score
  },
})
export default class TicTacToe extends Vue {
  data () {
    return {
      matchNo: 0,
      amountOfWins: {
        o: 0,
        x: 0
      }
    }
}
  constructor() {
    super();
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