<template>
  <div class="row justify-center reading-result">
    <p class="text-center ">
      {{position}} карта <span class="card-name text-primary">{{name}}</span> отвечает:<br> <span class="card-answer text-primary">{{result}}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';


const store = useReadingStore();

const name = computed(()=> store.answers.length ? store.answers[0].name : '');
const result = computed(()=> store.answers.length ? store.answers[0].result : '');
const position = computed(()=> store.answers.length && store.answers[0].position === 'reversed' ? 'Перевернутая' : 'Прямая');

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

.reading-result {
  margin: 20px 35px 0 35px;
}

.card-answer {
  display: inline-block;
  font-size: 35px;
  font-family: 'vinqueregular';
}

.card-answer::first-letter {
  text-transform: uppercase;
}
</style>
