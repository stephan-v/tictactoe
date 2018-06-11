import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Bijvoorbeeld omdat speler 'x' altijd beignt:
    //state: { currentPlayer: 'x' }
  },
  mutations: {
    //Bijvoorbeeld doeEenZet: function(gekozenVlak) {..}
    //(In component: (this.$store.commit('doeEenZet', 'CM'))
  },
  getters: {
    //Bijvoorbeeld (in component: this.$store.getters.gameIsWon):
    gameIsWon: function() {
      return cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.CT, this.cellMarkers.RT) 
             || cellsAreEqual(this.cellMarkers.LM, this.cellMarkers.CM, this.cellMarkers.RM)
             || cellsAreEqual(this.cellMarkers.LB, this.cellMarkers.CB, this.cellMarkers.RB)
             || cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.LM, this.cellMarkers.LB)
             || cellsAreEqual(this.cellMarkers.CT, this.cellMarkers.CM, this.cellMarkers.CB)
             || cellsAreEqual(this.cellMarkers.RT, this.cellMarkers.RM, this.cellMarkers.RB)
             || cellsAreEqual(this.cellMarkers.LT, this.cellMarkers.CM, this.cellMarkers.RB)
             || cellsAreEqual(this.cellMarkers.LB, this.cellMarkers.CM, state.cellMarkers.RT)
               
          function cellsAreEqual(firstCell, secondCell, thirdCell) {
            return firstCell !== ''   && firstCell === secondCell && secondCell === thirdCell; 
          }
     }
  }
});
