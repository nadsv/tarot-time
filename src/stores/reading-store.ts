import { defineStore } from 'pinia';
import { config } from 'src/config';
import { api } from 'boot/axios';

export const useReadingStore = defineStore('readings', {
  state: () => ({
    currentCardArray: config.INITIAL_ARRAY_OF_CARDS,
    cardsInReading: [],
    openedCards: [],
    currentNumberOfCards: config.TOTAL_NUMBER_OF_CARDS,
    collection: 'cards-rider–waite',
    reading: config.READINGS[0],
    listOfCards: [],
    cardInList: { id: '', name: '' },
    answers: [],
    answerStatus: false,
    errorStatus: false,
    showAnswer: false,
  }),

  getters: {
    choosingCardsIsEnabled(state) {
      return state.reading.number > state.cardsInReading.length;
    },
    suffixForAnswer(state) {
      return state.reading.owner ? state.reading.owner : state.reading.id;
    },
    answerVisibility(state) {
      return (
        state.answerStatus === true &&
        state.errorStatus === false &&
        state.showAnswer === true
      );
    },
    cardByNumber: (state) => (num: number) => {
      return state.answers.find((card) => card.id === num.toString());
    },
    linkByNumber: (state) => (num: number) => {
      return `/assets/${state.collection}/${Math.abs(num)}.png`;
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
      this.answers = [];
      this.answerStatus = false;
      this.errorStatus = false;
      this.showAnswer = false;
    },

    async getAnswers(payload: {
      id: number;
      position: number;
      index: number;
      field: string;
    }) {
      try {
        if (this.errorStatus) return;
        const response = await api.get(
          `/card/${payload.id}?p=${payload.position}&f=${payload.field}`
        );
        if (response.data.message) throw new Error(response.data.message);
        this.answers[payload.index] = response.data;
        this.answerStatus = this.answers.length === this.reading.number;
      } catch (error) {
        this.errorStatus = true;
        console.log('Ошибка получения ответа', error);
      }
    },

    async getCardMeanings(id: string) {
      try {
        if (this.errorStatus) return;
        const response = await api.get(`/card/${id}?p=2&f=all`);
        if (response.data.message) throw new Error(response.data.message);
        this.cardInList = response.data;
      } catch (error) {
        this.errorStatus = true;
        console.log('Ошибка получения ответа', error);
      }
    },

    async getList() {
      try {
        if (this.errorStatus) return;
        const response = await api.get('/card');
        if (response.data.message) throw new Error(response.data.message);
        this.listOfCards = response.data;
      } catch (error) {
        this.errorStatus = true;
        console.log('Ошибка получения ответа', error);
      }
    },
  },
});
