<template>
  <q-page class="row items-strech justify-evenly bckgrnd">
    <decorative-panel panel-color="#7f3aad"
      ><tarot-deck
        :stacked="stacked"
        :card-height="cardHeight"
        :cardsNumber="78"
      ></tarot-deck>
      <template v-slot:footer>
        <q-btn
          color="dark"
          text-color="accent"
          label="Перемешать"
          @click="shuffleCards"
        />
      </template>
      <q-resize-observer @resize="onResize" />
    </decorative-panel>
    <decorative-panel panel-color="#ffe4c4">Hello!</decorative-panel>
    <decorative-panel panel-color="#f5e274">It is a rainbow!</decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TarotDeck from 'src/components/readings/TarotDeck.vue';
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
$q.dark.set(true);

const el = document.querySelector(':root');
const c = getComputedStyle(el);
let cardHeight = ref(150);

const onResize = () => {
  cardHeight.value = parseInt(c.getPropertyValue('--card-height'));
};

const stacked = ref(true);

const shuffleCards = () => {
  console.log('Shuffle cards');
  stacked.value = !stacked.value;
};
</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}
</style>
