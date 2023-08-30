<template>
  <div class="row q-gutter-md containter">
    <div
      v-for="(num, index) in cardsInReading"
      :key="num"
      class="card is-flipped"
      ref="cardArray"
      @click="flipCard(index)"
    >
      <div
        class="card__face card__face--front text-negative"
        :style="cardFaceStyle(num)"
      ></div>
      <div class="card__face card__face--back"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { cardsInReading } = storeToRefs(store);

const cardArray = ref<HTMLInputElement[]>([]);

const flipCard = (key: number) => {
  cardArray.value[key].classList.toggle('is-flipped');
};

const cardFaceStyle = (num: number): { 'background-image': string } => {
  return {
    'background-image': 'url(./src/assets/cards-rider–waite/' + num + '.png)',
  };
};
</script>

<style scoped>
.container {
  counter-reset: number 1;
}

.card {
  position: relative;
  width: calc(var(--card-height) * 0.59);
  height: var(--card-height);
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
  counter-increment: number 1;
}

.card__face--front::before {
  content: counter(number);
  display: block;
  background-color: rgba(255, 255, 255, 0.8);
  width: 15px;
  height: 15px;
  border-radius: 10px;
  position: relative;
  left: 2px;
  top: 2px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
}

.card__face--front:hover {
  z-index: 79;
  transform: scale(1.3);
  position: absolute;
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
