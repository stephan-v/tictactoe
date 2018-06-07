<template>
  <div id="app">
    <TicTacToe></TicTacToe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TicTacToe from '@/components/TicTacToe.vue'; // @ is an alias to /src


@Component({
  components: {
    TicTacToe
  },
})
export default class Game extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
