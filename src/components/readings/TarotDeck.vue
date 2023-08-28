<template>
  <div class="deck">
    <div
      v-for="num in props.cardsNumber"
      :key="num"
      :class="{ card: true, 'card--stacked': props.stacked }"
      :style="deckStyle(num)"
      ref="cardArray"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { shapeData } from './helpers';

const cardArray = ref<HTMLInputElement>([]);
const card = ref<HTMLInputElement>([]);

const getEndOfSuffling = (event: TransitionEvent) => {
  if (event.propertyName === 'opacity') {
    emit('laidOut', false);
  }
};

onMounted(() => {
  card.value = cardArray.value[props.cardsNumber - 1];

  card.value.addEventListener('transitionend', getEndOfSuffling);
});

onBeforeUnmount(() => {
  card.value.removeEventListener('click', getEndOfSuffling);
});

const props = defineProps<{
  stacked: boolean;
  cardHeight: number;
  cardsNumber: number;
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
  const { angle } = shapeData(num, props.cardsNumber, props.cardHeight);
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
  background-color: lightblue;
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
  z-index: 999;
  box-shadow: 0px 0px 4px 4px rgb(205, 40, 164);
}

@media (max-width: 500px) {
  .card {
    border-width: 3px;
  }
}
</style>
