<template>
  <div class="row justify-center">
    <p class="text-center card-heading">
      Карта <span class="card-name text-primary">{{name}}</span> советует следующее: 
    </p>
    <p class="card-meaning text-justify">
      {{result}}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';


const store = useReadingStore();

const name = computed(()=> store.answers.length ? store.answers[0].name : '');
const result = computed(()=> store.answers.length ? store.answers[0].result : '');

</script>

<style scoped>

.card-heading {
  margin: 0 35px 20px 35px;
}

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
