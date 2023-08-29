import { defineStore } from 'pinia';

export const useCounterStore = defineStore('readings', {
  state: () => ({
    currentNumberOfCards: 78,
    heightOfCards: 130
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
