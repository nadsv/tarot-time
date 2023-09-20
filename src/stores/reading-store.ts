import { defineStore } from 'pinia';
import { config } from 'src/config';
import { api } from 'boot/axios';

export const useReadingStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    cardsInReading: [],
    openedCards: [],
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    collection: 'cards-rider-waite',
    reading: config.READINGS[0],
    answers: [],
    answerStatus: false,
    errorStatus: false,
    showAnswer: false
  }),

  getters: {
    choosingCardsIsEnabled(state) {
      return state.reading.number > state.cardsInReading.length;
    },
    suffixForAnswer(state) {
      return state.reading.owner  ? state.reading.owner : state.reading.id
    },
    answerVisibility(state) {
      return state.answerStatus === true && state.errorStatus === false && state.showAnswer === true;
    } 
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
      this.answerStatus = false;
      this.errorStatus = false;
      this.showAnswer = false;
    },

    async getAnswers(payload: {id: number; position: number; index: number}) {
      try {
        if (this.errorStatus) return;
        const response = await api.get(`/card/${payload.id}?p=${payload.position}`);
        if (response.data.message) throw new Error(response.data.message);
        this.answers[payload.index] = response.data;
        this.answerStatus = (this.answers.length === this.reading.number);
      } catch (error) {
        this.errorStatus = true;
        console.log('Ошибка получения ответа', error)
      }
    },
  },
});
