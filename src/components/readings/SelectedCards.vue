<template>
  <div class="row q-gutter-md">
    <div
      v-for="(num, index) in cardsInReading"
      :key="num"
      class="card is-flipped"
      ref="cardArray"
      @click="flipCard(index, num)"
    >
      <div
        class="card__face card__face--front text-negative"
        :style="cardFaceStyle(num)"
      >
      <div class="counter" :style="{transform: 'unset !important'}">{{index+1}}</div>
      </div>
      <div class="card__face card__face--back"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { cardsInReading, openedCards,reading } = storeToRefs(store);

const cardArray = ref<HTMLInputElement[]>([]);

const flipCard = (key: number, num: number) => {
  if (openedCards.value.includes(num) || reading.value.number !== cardsInReading.value.length) return;
  cardArray.value[key].classList.toggle('is-flipped');
  openedCards.value.push(num);
};

const cardFaceStyle = (num: number): { 'background-image': string, transform?: string } => {
  let style = {
    'background-image': 'url(./src/assets/cards-rider–waite/' + Math.abs(num) + '.png)',
  };
  if (num < 0) {
    return {
      ...style,
      transform: 'scaleY(-1)'
    }
  }
  return {
    'background-image': 'url(./src/assets/cards-rider–waite/' + Math.abs(num) + '.png)',
  };
};
</script>

<style scoped>

.card {
  position: relative;
  width: calc(var(--card-height) * 0.59);
  height: var(--card-height);
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
}

.counter {
  z-index: 78;
  display: block;
  background-color: rgba(255, 255, 255, 0.8);
  width: 15px;
  height: 15px;
  border-radius: 10px;
  position: relative;
  left: calc(50% - 6px);
  top: -8px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
}

.card__face--front:hover::before {
  display: none;
}

.card.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: calc(var(--card-height) * 0.59);
  height: var(--card-height);
  border: 1px solid rgb(0, 0, 0);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 3px solid black;
  border-radius: 10px;
  backface-visibility: hidden;
}

.card__face--front {
  z-index: 1;
  transition: transform 0.5s;
  background-image: url(./src/assets/cards-rider–waite/2.png);
}

.card__face--back {
  border: 1px solid rgb(0, 0, 0);
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 3px solid black;
  border-radius: 10px;
  transform: rotateY(180deg);
}
</style>
