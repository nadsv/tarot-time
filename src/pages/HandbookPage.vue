<template>
  <q-page class="row items-strech q-page">
    <decorative-panel id="scrollToList" :panel-color="panelColors[0]">
      <template v-slot:header><span id="readingName">Карты</span></template>
      <tarot-list></tarot-list>
    </decorative-panel>
    <decorative-panel
      id="scrollToSelectedCard"
      :class="{ 'selected-cards-panel': !store.cardInList.id }"
      :panel-color="panelColors[1]"
      ><template v-slot:header>Выбранная карта</template>
      <tarot-card-image></tarot-card-image>
    </decorative-panel>
    <decorative-panel
      id="scrollToMeaning"
      :panel-color="panelColors[2]"
      :class="{ 'meaning-panel': !store.cardInList.id }"
      ><template v-slot:header>{{ title }}</template>
      <tarot-card-meaning class="tarot-card-meaning"></tarot-card-meaning>
      <div class="action-panel"></div>
      <template v-slot:actionPanel v-if="store.cardInList.id">
        <q-btn
          v-if="store.cardInList.position === 'reversed'"
          label="Прямая карта"
          color="dark"
          text-color="accent"
          class="btn"
          @click="togglePostion('upright')"
        />
        <q-btn
          v-if="store.cardInList.position === 'upright'"
          label="Перевернутая карта"
          color="dark"
          text-color="accent"
          class="btn"
          @click="togglePostion('reversed')"
        />
        <q-btn
          label="Новая карта"
          color="dark"
          text-color="accent"
          class="btn"
          @click="resetCardInList"
        />
      </template>
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import DecorativePanel from 'src/components/DecorativePanel.vue';
import TarotList from 'src/components/handbook/TarotList.vue';
import TarotCardImage from 'src/components/handbook/TarotCardImage.vue';
import TarotCardMeaning from 'src/components/handbook/TarotCardMeaning.vue';
import { useReadingStore } from 'src/stores/reading-store';
import { scrollToElement } from 'src/utils/helpers';

const store = useReadingStore();

let elToScroll0: HTMLElement | null;
let elToScroll: HTMLElement | null;
let elToScroll1: HTMLElement | null;

onMounted(() => {
  elToScroll0 = document.querySelector('#scrollToList');
  elToScroll = document.querySelector('#scrollToSelectedCard');
  elToScroll1 = document.querySelector('#scrollToMeaning');
});

const togglePostion = (position: string) => {
  store.cardInList.position = position;
  scrollToElement(elToScroll1, 0, 0);
};

const resetCardInList = () => {
  store.cardInList = { id: '', name: '', position: '' };
  scrollToElement(elToScroll0, 0, 0);
};

watch(
  () => store.cardInList.name,
  () => {
    store.cardInList.name && scrollToElement(elToScroll, 1000, 1000);
  }
);

const panelColors = ref([
  'rgba(255,228,196, 0.8)',
  'rgba(127,58,173, 0.8)',
  'rgba(245,226,116, 0.8)',
]);

const title = computed(() => {
  if (!store.cardInList.position) return 'Значение выбранной карты';
  return store.cardInList.position !== 'upright'
    ? 'Значение перевернутой карты ' + store.cardInList.name
    : 'Значение прямой карты ' + store.cardInList.name;
});
</script>

<style scoped>
#scrollToList,
#scrollToSelectedCard {
  margin-right: 20px;
}

.meaning-panel {
  height: auto;
}

.btn {
  margin: 0 10px 0 10px;
}

.tarot-card-meaning {
  align-self: flex-start;
}

.q-page {
  justify-content: space-evenly;
}

@media (max-width: 1840px) {
  .q-page {
     flex-direction: column;
     max-width: 750px;
     margin: 0 auto;
  }

  .meaning-panel,
  .selected-cards-panel {
    height: 0;
    width: 0;
    flex-basis: 0 !important;
    flex-shrink: 100;
    overflow: hidden;
    border: none !important;
    margin: 0 !important;
  }
}

@media (max-width: 1245px) {
  #scrollToList,
  #scrollToSelectedCard,
  .selected-cards-panel {
    margin-right: auto !important;
    margin-left: auto !important;
  }
}

@media (max-width: 639px) {
  #scrollToList,
  #scrollToSelectedCard,
  .selected-cards-panel {
    margin-right: 15px !important;
    margin-left: 15px !important;
  }
}
</style>
