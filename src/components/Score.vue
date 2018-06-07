<template>
    <span><strong>{{icon}}:</strong> {{score}} </span>
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
<style scoped>
    span {
        font-size: 2em;
    }
</style>
