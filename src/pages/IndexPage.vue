<template>
  <q-page class="row items-strech justify-evenly bckgrnd">
    <decorative-panel panel-color="#7f3aad"
      ><tarot-deck></tarot-deck
    ></decorative-panel>
    <decorative-panel panel-color="#ffe4c4">Hello!</decorative-panel>
    <decorative-panel panel-color="#f5e274">It is a rainbow!</decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import TarotDeck from 'src/components/TarotDeck.vue';
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
$q.dark.set(true);
</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}
</style>
