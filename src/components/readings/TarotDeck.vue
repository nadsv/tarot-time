<template>
  <div class="deck">
    <div
      v-for="num in props.cardsNumber"
      :key="num"
      :class="{ card: true, 'card--stacked': props.stacked }"
      :style="deckStyle(num)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { shapeData } from './helpers';

const props = defineProps<{
  stacked: boolean;
  cardHeight: number;
  cardsNumber: number;
}>();

const deckStyle = (
  num: number
): {
  transform: string;
  'clip-path': string;
  transition: string;
  opacity: number;
} => {
  const { angle, line } = shapeData(num, props.cardsNumber, props.cardHeight);
  if (props.stacked) {
    return {
      transform: 'unset',
      'clip-path': 'unset',
      transition: 'unset',
      opacity: 0,
    };
  }
  return {
    transform: 'rotate( -' + angle + 'deg)',
    'clip-path': 'unset',
    opacity: 1,
    transition: 'opacity ' + '0s ' + (0.05 * num + 0.6) + 's, left 0.4s 0.1s',
  };
};
</script>

<style scoped>
.deck {
  position: relative;
  width: calc(var(--card-height) * 2 - 2px);
  height: calc(var(--card-height) * 2 - 2px);
}

.card {
  position: absolute;
  left: 50%;
  transform-origin: left bottom;
  width: calc(var(--card-height) * 0.65);
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
