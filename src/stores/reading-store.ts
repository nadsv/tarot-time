import { defineStore } from 'pinia';
import { config } from 'src/config';
import { api } from "boot/axios";
import { showError } from "components/readings/helpers";

export const useReadingStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    cardsInReading: [],
    openedCards: [],
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    collection: 'cards-rider-waite',
    reading: config.READINGS[0],
    answers: []
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
    resetState() {
      this.currentCardArray = config.INITIAL_ARRAY_OF_CARDS;
      this.cardsInReading = [];
      this.openedCards = [];
      this.answers =[];
    },

    async getAnswers(payload: string) {
      try {
        const response = await api.get("/api/card/0?p=0");
       // this.answers = [...this.answers, response.data];
       // console.log('answers', this.answers);
      } catch (error) {
        console.log('Ошибка', error)
      }
    },
  },
});
