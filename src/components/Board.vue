<template>
<div>
  <table class="grid">
    <tr>
      <Cell position="LT"></Cell>
      <Cell position="CT"></Cell>
      <Cell position="RT"></Cell>
    </tr>
    <tr>
      <Cell position="LM"></Cell>
      <Cell position="CM"></Cell>
      <Cell position="RM"></Cell>
    </tr>
    <tr>
      <Cell position="LB"></Cell>
      <Cell position="CB"></Cell>
      <Cell position="RB"></Cell>
    </tr>
  </table>
    <div>
      <button v-on:click="startNewGame">New Game</button>
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
table {
  background-color: #616161;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-collapse:collapse;
 
}

td {
   border: 1px solid white;
   width: 150px;
   height:150px;
   color: white;
   font-size: 8em;
}
</style>