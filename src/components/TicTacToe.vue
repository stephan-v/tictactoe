<template>
  <div class="tictactoe">
      <Board></Board>
      <div class="rightpanel">
        <CurrentPlayer></CurrentPlayer>
        <Score icon="x"></Score>
        <Score icon="o"></Score>
      </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.tictactoe {
  width:50%;
  margin:0 auto;
}

.tictactoe > div {
  float: left;
}

.rightpanel {
  margin-left:300px;
}
</style>
