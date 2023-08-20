<template>
  <q-page class="row items-strech justify-evenly bckgrnd">
    <div class="panel" style="background-color: bisque">Hello!</div>
    <div class="panel">
      <tarot-deck active :todos="todos" :meta="meta"></tarot-deck>
    </div>
    <div class="panel" style="background-color: rgb(182, 119, 41)">Buy!</div>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import TarotDeck from 'src/components/TarotDeck.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
$q.dark.set(true);

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}

.panel {
  flex-basis: 599px;
}
</style>
