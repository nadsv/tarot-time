<template>
  <div class="row q-gutter-md justify-center selected-cards-wrapper">
    <div
      v-for="(num, index) in cardsInReading"
      :key="num"
      class="card is-flipped"
      ref="cardArray"
      @click="onClick(index, num)"
    >
      <div
        class="card__face card__face--front text-accent"
        :style="cardFaceStyle(num)"
      >
        <div v-if="cardName(index)" class="counter" ref="counter">
          {{ cardName(index) }}
        </div>
      </div>
      <div class="card__face card__face--back"></div>
    </div>
  </div>
  <tarot-dialog
    :link="largeCardLink"
    :name="largeCardLink"
    v-model="showDialog"
  ></tarot-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';
import TarotDialog from '../TarotDialog.vue';

const store = useReadingStore();
const { cardsInReading, openedCards, reading } = storeToRefs(store);

const cardArray = ref<HTMLInputElement[]>([]);
const counter = ref<HTMLInputElement[]>([]);
let showDialog = ref(false);
let largeCardName = ref('');
let largeCardLink = ref('');

const showLargeCard = (num: number) => {
  showDialog.value = true;
  const card = store.cardByNumber(num);
  largeCardName.value = card.name;
  largeCardLink.value = store.linkByNumber(num);
};

const onClick = (key: number, num: number) => {
  if (reading.value.number !== cardsInReading.value.length) {
    return;
  }
  if (openedCards.value.includes(num)) {
    showLargeCard(Math.abs(num));
    return;
  }

  cardArray.value[key].classList.toggle('is-flipped');
  if (num < 0 && reading.value.cardNames) {
    counter.value[key].classList.toggle('is-reversed');
  }
  openedCards.value.push(num);
  store.getAnswers({
    id: Math.abs(num),
    position: num > 0 ? 0 : 1,
    index: key,
    field: store.reading.field(num > 0 ? 'upright' : 'reversed', key),
  });
};

const cardName = (num: number): string => {
  if (!reading.value.cardNames) return '';
  return reading.value.cardNames[num];
};

const cardFaceStyle = (
  num: number
): { 'background-image': string; transform?: string } => {
  let style = {
    'background-image': `url(${store.linkByNumber(num)}`,
  };
  if (num < 0) {
    return {
      ...style,
      transform: 'scale(-1)',
    };
  }
  return style;
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
  background-color: rgba(0, 0, 0, 01);
  border-radius: 10px;
  position: relative;
  top: -20px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
}

.card__face--front:hover::before {
  display: none;
}

.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}
.is-reversed {
  transform: scale(-1);
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
  transition: transform 0.5s;
}

.card__face--back {
  border: 1px solid rgb(0, 0, 0);
  background-image: url(/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 3px solid black;
  border-radius: 10px;
  transform: rotateY(180deg);
}

.selected-cards-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.large-image {
  width: 240px;
  height: 417px;
}
</style>
