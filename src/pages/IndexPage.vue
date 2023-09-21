<template>
  <q-page class="row items-strech justify-evenly">
    <decorative-panel :panel-color="panelColors[0]">
      <template v-slot:header> {{ reading.title }} </template>
      <tarot-deck :stacked="stacked"></tarot-deck>
      <template v-slot:actionPanel>
        <q-btn
          color="dark"
          text-color="accent"
          label="Перемешать"
          @click="shuffleCards"
          @laid-out="(value: boolean) => {}"
        />
      </template>
      <template v-slot:footer>{{ hintForCardDeck }}</template>
    </decorative-panel>
    <decorative-panel id="scrollToEl" :panel-color="panelColors[1]"
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
      <template v-slot:footer>{{ hintForCardReading }}</template>
    </decorative-panel>
    <decorative-panel :panel-color="panelColors[2]"
      ><template v-slot:header>Толкование</template>
      <tarot-answer></tarot-answer>
      <template v-slot:actionPanel v-if="store.answerVisibility || store.errorStatus">
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
import { useQuasar, scroll } from 'quasar';
import { wordDeclination } from 'src/utils/helpers';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const $q = useQuasar();
$q.dark.set(true);

const panelColors = ref([
  'rgba(127,58,173, 0.8)',
  'rgba(255,228,196, 0.8)',
  'rgba(245,226,116, 0.8)',
]);

const store = useReadingStore();
const { reading, cardsInReading, openedCards } = storeToRefs(store);

const { getScrollTarget, setVerticalScrollPosition } = scroll;

const scrollToElement = (el: HTMLElement) => {
  const target = getScrollTarget(el);
  const offset = el.offsetTop - 20;
  const duration = 1000;
  setTimeout(() => setVerticalScrollPosition(target, offset, duration), 1000);
};

let elToScroll: HTMLElement | null;

onMounted(() => {
  elToScroll = document.querySelector('#scrollToEl');
});

watch(
  () => cardsInReading.value.length,
  () => {
    if (
      cardsInReading.value.length === reading.value.number &&
      cardsInReading.value.length
    ) {
      scrollToElement(elToScroll);
    }
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
    ? `Выберите ${numberOfCards} ${wordDeclination(
        numberOfCards
      )} двойным щелчком`
    : 'Карты выбраны';
});

const hintForCardReading = computed(() => {
  return reading.value.number - cardsInReading.value.length
    ? 'Сначала выберите карты'
    : reading.value.number - openedCards.value.length
    ? 'Переверните карты'
    : 'Карты раскрыты';
});

const getAnswers = () => {
  store.showAnswer = true;
}

const startNewReadning =() => {
  store.resetState();
}
</script>
