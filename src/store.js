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
      
    }
  }
});
