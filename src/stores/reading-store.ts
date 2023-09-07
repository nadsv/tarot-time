import { defineStore } from 'pinia';
import { config } from 'src/config';

export const useReadingStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    cardsInReading: [],
    openedCards: [],
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    collection: 'cards-rider-waite',
    reading: {
      id: 0,
      title: 'Прошлое, настоящее, будущее',
      number: 3,
      disabled: false,
      owner: 0,
      link: 'readings/',
      cardNames: ['Прошлое', 'Настоящее', 'Будущее']
    },
  }),

  getters: {
    choosingCardsIsEnabled(state) {
      return state.reading.number > state.cardsInReading.length;
    },
  },

  actions: {
    increment() {
      this.currentNumberOfCards++;
    },
  },
});
