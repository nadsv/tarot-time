<template>
  <q-page class="row items-strech justify-evenly">
    <decorative-panel id="scrollToDeck" :panel-color="panelColors[0]">
      <template v-slot:header
        ><span id="readingName">{{ reading.title }}</span></template
      >
      <template v-slot:leftHint>{{ reading.leftHint }}</template>
      <template v-slot:rightHint>{{ hintForCardDeck }}</template>
      <tarot-deck :stacked="stacked"></tarot-deck>
      <template v-slot:actionPanel>
        <q-btn
          color="dark"
          text-color="accent"
          label="Перетасовать"
          @click="shuffleCards"
          @laid-out="(value: boolean) => {}"
        />
      </template>
    </decorative-panel>
    <decorative-panel
      id="scrollToSelectedCards"
      class="selected-cards-panel"
      :panel-color="panelColors[1]"
      ><template v-slot:header>Выбранные карты</template>
      <selected-cards></selected-cards>
      <template v-slot:actionPanel>
        <q-btn
          v-if="!(reading.number - openedCards.length)"
          color="dark"
          text-color="accent"
          label="Толковать"
          @click="getAnswers"
        />
      </template>
    </decorative-panel>
    <decorative-panel
      id="scrollToAnswer"
      :class="{ 'answer-panel': !showAnswer }"
      :panel-color="panelColors[2]"
      ><template v-slot:header>Толкование</template>
      <tarot-answer></tarot-answer>
      <template v-slot:actionPanel v-if="showResult">
        <q-btn
          v-if="!(reading.number - openedCards.length)"
          color="dark"
          text-color="accent"
          label="Начать новый расклад"
          @click="startNewReadning"
        />
      </template>
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import TarotDeck from 'src/components/readings/TarotDeck.vue';
import SelectedCards from 'src/components/readings/SelectedCards.vue';
import TarotAnswer from 'src/components/readings/TarotAnswer.vue';
import DecorativePanel from 'src/components/DecorativePanel.vue';
import { scroll } from 'quasar';
import { wordDeclination, scrollToElement } from 'src/utils/helpers';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const panelColors = ref([
  'rgba(127,58,173, 0.8)',
  'rgba(255,228,196, 0.8)',
  'rgba(245,226,116, 0.8)',
]);

const store = useReadingStore();
const { reading, cardsInReading, openedCards, showAnswer } = storeToRefs(store);

let elToScroll0: HTMLElement | null;
let elToScroll: HTMLElement | null;
let elToScroll1: HTMLElement | null;
let readingNameEl: HTMLElement | null;

onMounted(() => {
  elToScroll0 = document.querySelector('#scrollToDeck');
  elToScroll = document.querySelector('#scrollToSelectedCards');
  elToScroll1 = document.querySelector('#scrollToAnswer');
  readingNameEl = document.querySelector('#readingName');
  headingAnimation(readingNameEl, 'reading-name');
});

let showResult = computed(() => {
  return store.answerVisibility || store.errorStatus;
});

watch(
  () => cardsInReading.value.length,
  () => {
    if (
      cardsInReading.value.length === reading.value.number &&
      cardsInReading.value.length
    ) {
      scrollToElement(elToScroll, 1000, 1000);
    }
  }
);

const headingAnimation = (el: HTMLElement, className: string) => {
  el?.classList.add(className);
  setTimeout((_) => el?.classList.remove(className), 1500);
};

watch(
  () => reading.value.title,
  () => {
    headingAnimation(readingNameEl, 'reading-name');
  }
);

const stacked = ref(false);

const shuffleCards = () => {
  stacked.value = true;
  setTimeout(() => (stacked.value = false));
};

const hintForCardDeck = computed(() => {
  const numberOfCards = reading.value.number - cardsInReading.value.length;
  return numberOfCards
    ? `Выберите ${numberOfCards} ${wordDeclination(numberOfCards)}`
    : 'Карты выбраны';
});

const getAnswers = () => {
  store.showAnswer = true;
  scrollToElement(elToScroll1, 0, 1000);
};

const startNewReadning = () => {
  store.resetState();
  scrollToElement(elToScroll0, 0, 0);
  headingAnimation(readingNameEl, 'reading-name');
};
</script>

<style scoped>
#scrollToDeck,
#scrollToSelectedCards {
  margin-right: 20px;
}
.reading-name {
  animation: light 1.5s ease;
}

.answer-panel {
  height: auto;
}

@media (max-width: 1840px) {
  .answer-panel {
    height: 0;
    flex-basis: 0 !important;
    flex-shrink: 100;
    overflow: hidden;
    border: none !important;
    margin: 0 !important;
  }
}

@media (max-width: 1245px) {
  .selected-cards-panel {
    margin-right: auto !important;
    margin-left: auto !important;
  }
}

@media (max-width: 639px) {
  .selected-cards-panel {
    margin-right: 15px !important;
    margin-left: 15px !important;
  }
}

@keyframes light {
  from {
    box-shadow: none;
    background-color: none;
  }

  50% {
    box-shadow: 0 0 7px 7px #f5d254;
    background-color: #f5d254;
  }

  to {
    box-shadow: none;
    background-color: none;
  }
}
</style>
