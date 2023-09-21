<template>
  <div v-for="(cardName, index) in store.reading.cardNames" :key="cardName" class="row answer justify-center">
      <h6 class="card-name text-center text-accent">{{cardName}} - {{position(index)}} карта {{store.answers[index].name}}</h6> 
      <p class="card-meaning">{{store.answers[index].meaning}}</p>
  </div>
</template>

<script setup lang="ts">
import { useReadingStore } from 'src/stores/reading-store';


const store = useReadingStore();

const position = (num: number): string=> { 
      return store.answers[num].position === 'reversed' ? 'перевернутая' : 'прямая';
  }

</script>

<style scoped>
.answer {
  width: 100%;
}

.card-name {
  display: inline-block;
  text-align: center;
  background-color: black;
  font-size: 14px;
  font-family: 'vinqueregular';
  padding: 5px;
  border-radius: 5px;
  line-height: 14px;
  margin: 0 0 10px 0;
}

.card-meaning {
  padding: 0 35px 0 35px;
}

@media (max-width: 450px) {
  .card-meaning {
  padding: 0 15px 20px 15px;
}
}

</style>
