import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cellMarkers: {
      LT: '',
      CT: '',
      RT: '',
      LM: '',
      CM: '',
      RM: '',
      LB: '',
      CB: '',
      RB: '',
    },
    currentPlayer: 'x',
    previousPlayer: '',
    scoreX: 0,
    scoreO: 0
  },
  mutations: {
    doMove(state, position) {
      state.cellMarkers[position] = state.currentPlayer;
      state.previousPlayer = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === 'x' ? 'o' : 'x'
    },
    startNewGame(state) {
      Object.keys(state.cellMarkers).forEach(pos => state.cellMarkers[pos] = '');
      state.currentPlayer = 'x';
      state.previousPlayer = '';
    }
  },
  getters: {
    getMarkByPosition: (state) => (position) => {
      return state.cellMarkers[position];
    },
    positionIsClickable: (state, getters) => (position) => {
      return !getters.gameIsWon && getters.getMarkByPosition(position) === ''
    },
    gameIsWon: (state) => {
      const win = cellsAreEqual(state.cellMarkers.LT, state.cellMarkers.CT, state.cellMarkers.RT)
        || cellsAreEqual(state.cellMarkers.LM, state.cellMarkers.CM, state.cellMarkers.RM)
        || cellsAreEqual(state.cellMarkers.LB, state.cellMarkers.CB, state.cellMarkers.RB)
        || cellsAreEqual(state.cellMarkers.LM, state.cellMarkers.CM, state.cellMarkers.RB)
        || cellsAreEqual(state.cellMarkers.LT, state.cellMarkers.LM, state.cellMarkers.LB)
        || cellsAreEqual(state.cellMarkers.CT, state.cellMarkers.CM, state.cellMarkers.CB)
        || cellsAreEqual(state.cellMarkers.RT, state.cellMarkers.RM, state.cellMarkers.RB)
        || cellsAreEqual(state.cellMarkers.LT, state.cellMarkers.CM, state.cellMarkers.RB)
        || cellsAreEqual(state.cellMarkers.LB, state.cellMarkers.CM, state.cellMarkers.RT)

      if(win) {
        if(state.previousPlayer === 'x') {
          state.scoreX++;
        }else{ 
          state.scoreO++;
        }
      }
      return win;
     function cellsAreEqual(firstCell, secondCell, thirdCell) {
       return firstCell !== ''   && firstCell === secondCell && secondCell === thirdCell; 
     }
   },
   boardIsFull: (state) => {
     return Object.values(state.cellMarkers).every(mark => mark != '');
   },
   isDraw: (state, getters) => {
     return getters.boardIsFull && !getters.gameIsWon;
   },
   gameIsOver: (state, getters) => {
     return getters.isDraw || getters.gameIsWon;
   },
   getWinner: (state, getters) => {
     return getters.gameIsWon ? state.previousPlayer: null;
   },
   getCurrentPlayer: (state) => {
     return state.currentPlayer.toUpperCase();
   },
   getScore: (state) => (icon) => {
     return icon === 'x' ? state.scoreX : state.scoreO;
   }
  }
});
