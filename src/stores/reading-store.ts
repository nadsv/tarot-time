import { defineStore } from 'pinia';
import { config } from 'src/config'

export const useReadingStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    cardsInReading: [],
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    reading: {
          id: 0,
          title: "Да или Нет?",
          number: 1,
          disabled: false,
          owner: 0,
          link: "readings/"
      }
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
