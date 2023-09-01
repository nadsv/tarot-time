<template>
  <div class="deck">
    <div
      v-for="(num, index) in currentCardArray"
      :key="num"
      :class="{ card: true, 'card--stacked': props.stacked }"
      :style="deckStyle(index)"
      ref="cardArray"
      @dblclick="chooseCard(num)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { shapeData, removeCard, randomCard, preloadImage } from './helpers';
import { config } from 'src/config/';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { currentCardArray, cardsInReading, reading, collection } = storeToRefs(store);

const cardArray = ref<HTMLInputElement[]>([]);
const card = ref<HTMLInputElement>();

const getEndOfSuffling = (event: TransitionEvent) => {
  if (event.propertyName === 'opacity') {
    emit('laidOut', false);
  }
};

const chooseCard = () => {
  const numberOfCards = reading.value.number - cardsInReading.value.length;
  if (numberOfCards) {
    const num = randomCard(currentCardArray.value.length);
    currentCardArray.value = removeCard(num, currentCardArray.value); 
    cardsInReading.value.push(num);
    preloadImage(Math.abs(num), collection.value);
  }
}

onMounted(() => {
  card.value = cardArray.value[config.TOTAL_NUMBER_OF_CARDS - 1];
  card.value.addEventListener('transitionend', getEndOfSuffling);
});

onBeforeUnmount(() => {
  card.value.removeEventListener('click', getEndOfSuffling);
});

const props = defineProps<{
  stacked: boolean;
}>();

const emit = defineEmits<{
  laidOut: [value: boolean];
}>();

const deckStyle = (
  num: number
): {
  transform: string;
  transition: string;
  opacity: number;
} => {
  const { angle } = shapeData(num, currentCardArray.value.length);
  if (props.stacked) {
    return {
      transform: 'unset',
      transition: 'unset',
      opacity: 0,
    };
  }
  return {
    transform: 'rotate( -' + angle + 'deg)',
    opacity: 1,
    transition: 'opacity ' + '0s ' + (0.05 * num + 0.6) + 's, left 0.4s 0.1s',
  };
};
</script>

<style scoped>
.deck {
  position: relative;
  width: calc(var(--card-height) * 2);
  height: calc(var(--card-height) * 2);
}

.card {
  position: absolute;
  left: 50%;
  transform-origin: left bottom;
  width: calc(var(--card-height) * 0.575);
  height: var(--card-height);
  background-color: blueviolet;
  border: 1px solid rgb(0, 0, 0);
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 3px solid black;
  border-radius: 10px;
  transition: box-shadow 0.5s;
  z-index: 9;
  cursor: pointer;
}

.card:first-child {
  opacity: 1 !important;
}

.card--stacked {
  left: calc(50% - var(--card-height) * 0.65 / 2);
}

.card:hover {
  clip-path: unset !important;
  box-shadow: 0px 0px 5px 5px #f5d254;
  filter: brightness(150%);
}

.card--deleted {
  display: none;
}

@media (max-width: 500px) {
  .card {
    border-width: 3px;
  }
}
</style>
