<template>
  <div class="row q-gutter-md justify-center">
    <p class="text-center">
      Ваша карта дня - {{position}} карта <span class="card-name text-primary">{{name}}</span>
    </p>
    <p class="card-meaning text-justify">
      {{meaning}}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';


const store = useReadingStore();

const name = computed(()=> store.answers.length ? store.answers[0].name : '');
const meaning = computed(()=> store.answers.length ? store.answers[0].meaning : '');
const position = computed(()=> store.answers.length && store.answers[0].position === 'reversed' ? 'перевернутая' : 'прямая');

</script>

<style scoped>
.card-name {
  font-size: 20px;
  display: inline-block;
  font-family: 'vinqueregular';
  text-transform: lowercase;
}

.card-name::first-letter {
  text-transform: uppercase;
}

.card-meaning {
  margin: 0;
  padding: 0 35px 35px 35px;
}

@media (max-width: 450px) {
  .card-meaning {
  padding: 0 15px 20px 15px;
}
}

</style>
