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
          @click="shuffleCards"
        />
      </template>
      <template v-slot:footer>{{ hintForCardReading }}</template>
    </decorative-panel>
    <decorative-panel :panel-color="panelColors[2]"
      ><template v-slot:header>Толкование</template>It is a rainbow!
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import TarotDeck from 'src/components/readings/TarotDeck.vue';
import SelectedCards from 'src/components/readings/SelectedCards.vue';
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';
import { useQuasar, scroll } from 'quasar';
import { wordDeclination } from 'src/components/readings/helpers';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';
import { config } from 'src/config/';

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

const route = useRoute();

watch(
      () => route.params,
      (params) => {
        const id = +(params.reading);
        const subId= +(params.subreading);
       /* if (subId) {
           const owner = config.READINGS[id]
           store.reading = owner.subReadings[subId];
        }*/
        if (id) {
           store.reading = config.READINGS[id]
        }
      }
)

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

const el = document.querySelector(':root');
const c = getComputedStyle(el);

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
</script>

