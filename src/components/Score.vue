<template>
  <div>
    <h3>Score {{icon}}:</h3>
    <br />
    {{score}}
    </div>
</template>

<script>
import Cell  from '@/components/Cell.vue';
    export default {   
        props : ['icon'],
        computed : {
            score: function() {
                return this.$store.getters.getScore(this.icon);
            }
        }
    }
</script>

<style>
</style>
