import { defineStore } from 'pinia';
import { config } from 'src/config'

export const useReadingsStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    heightOfCards: config.CARD_HEIGHT
  }),

  getters: {
    doubleCount (state) {
      return state.currentNumberOfCards * 2;
    }
  },

  actions: {
    increment () {
      this.currentNumberOfCards++;
    }
  }
});
