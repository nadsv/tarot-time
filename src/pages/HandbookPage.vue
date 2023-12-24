<template>
  <q-page class="row items-strech justify-evenly">
    <decorative-panel id="scrollToDeck" :panel-color="panelColors[0]">
      <template v-slot:header><span id="readingName">Карты</span></template>
      <tarot-list></tarot-list>
    </decorative-panel>
    <decorative-panel
      id="scrollToSelectedCards"
      class="selected-cards-panel"
      :panel-color="panelColors[1]"
      ><template v-slot:header>Выбранная карта</template>
      <tarot-card-image></tarot-card-image>
    </decorative-panel>
    <decorative-panel :panel-color="panelColors[2]"
      ><template v-slot:header>Значение</template>
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DecorativePanel from 'src/components/DecorativePanel.vue';
import TarotList from 'src/components/handbook/TarotList.vue';
import TarotCardImage from 'src/components/handbook/TarotCardImage.vue';

const panelColors = ref([
  'rgba(255,228,196, 0.8)',
  'rgba(127,58,173, 0.8)',
  'rgba(245,226,116, 0.8)',
]);
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
