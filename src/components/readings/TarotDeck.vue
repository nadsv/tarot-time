<template>
  <div class="deck">
    <div
      v-for="num in props.cardsNumber"
      :key="num"
      class="card"
      :style="deckStyle(num)"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  stacked: boolean;
  cardHeight: number;
  cardsNumber: number;
}>();

const deckStyle = (num: number): { transform: string; 'clip-path': string } => {
  const angle = (360 / props.cardsNumber) * num;
  const rad = ((360 / props.cardsNumber) * Math.PI) / 180;
  const line =
    num === props.cardsNumber
      ? Math.tan(rad) * props.cardHeight - 1.5
      : Math.tan(rad) * 200;
  if (props.stacked) {
    return {
      transform: 'unset',
      'clip-path': 'unset',
    };
  }
  return {
    transform: 'rotate(' + angle + 'deg)',
    'clip-path': 'polygon(0% 0%,' + line + 'px 0%, 0% 100%)',
  };
};
</script>

<style scoped>
.deck {
  position: relative;
  width: calc(var(--card-height) * 2 - 2px);
  height: calc(var(--card-height) * 2 - 2px);
  background-color: black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  box-shadow: 0px 0px 0px 2px black;
  border-radius: 50%;
}

.card {
  position: absolute;
  left: 50%;
  transform-origin: left bottom;
  width: calc(var(--card-height) * 0.7);
  height: var(--card-height);
  background-color: lightblue;
  border: 1px solid black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 5px solid black;
  border-radius: 5px;
  transition: box-shadow 0.5s;
}

.card:hover {
  clip-path: unset !important;
  z-index: 78;
  opacity: 60%;
  box-shadow: 0px 0px 0px 4px #cd28a4;
}

@media (max-width: 500px) {
  .card {
    border-width: 3px;
    clip-path: polygon(0% 0%, 13.7px 0%, 0% 100%);
  }
}
</style>
