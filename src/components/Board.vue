<template>
<div>
  <div>
    <button v-on:click="startNewGame">New Game</button>
  </div>
  <div class="grid">
    <Cell position="LT"></Cell>
    <Cell position="CT"></Cell>
    <Cell position="RT"></Cell>

    <Cell position="LM"></Cell>
    <Cell position="CM"></Cell>
    <Cell position="RM"></Cell>

    <Cell position="LB"></Cell>
    <Cell position="CB"></Cell>
    <Cell position="RB"></Cell>
  </div>
</div>
  
</template>

<script>
import Cell  from '@/components/Cell.vue';

    export default {   
        components: { Cell },         
        methods : {
          startNewGame: function() {
            this.$store.commit('startNewGame');
          }
        }
    }
</script>

<style>
.grid {
  display: grid;
  grid-gap: 5px 5px;
  grid-template-columns: auto auto auto;
  justify-content: center;
}
</style>