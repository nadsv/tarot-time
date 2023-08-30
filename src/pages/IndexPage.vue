<template>
  <q-page class="row items-strech justify-evenly bckgrnd">
    <decorative-panel :panel-color="panelColors[0]">
      <template v-slot:header> {{reading.title}} </template>
      <tarot-deck
        :stacked="stacked"
      ></tarot-deck>
      <template v-slot:actionPanel>
        <q-btn
          color="dark"
          text-color="accent"
          label="Перемешать"
          @click="shuffleCards"
          @laid-out="(value: boolean) => {}"
        />
      </template>
      <template v-slot:footer> Выбери 1 {{wordDeclination(1)}} <br />двойным щелчком</template>
    </decorative-panel>
    <decorative-panel :panel-color="panelColors[1]"
      ><template v-slot:header>Выбранные карты</template>
      <selected-cards></selected-cards>
      <template v-slot:footer> Карты <br />не выбраны</template>
    </decorative-panel>
    <decorative-panel :panel-color="panelColors[2]"
      ><template v-slot:header>Толкование</template>It is a rainbow!
      <template v-slot:footer> Карты <br />не выбраны</template>
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TarotDeck from 'src/components/readings/TarotDeck.vue';
import SelectedCards from 'src/components/readings/SelectedCards.vue';
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';
import { useQuasar } from 'quasar';
import { wordDeclination } from 'src/components/readings/helpers';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { reading } = storeToRefs(store);

const $q = useQuasar();
$q.dark.set(true);

const panelColors = ref(["rgba(127,58,173, 0.8)", "rgba(255,228,196, 0.8)", "rgba(245,226,116, 0.8)"]);

const el = document.querySelector(':root');
const c = getComputedStyle(el);


const stacked = ref(false);

const shuffleCards = () => {
  stacked.value = true;
  setTimeout(() => (stacked.value = false));
};
</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}
</style>
