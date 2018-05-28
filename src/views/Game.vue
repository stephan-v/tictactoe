<template>
  <div>
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