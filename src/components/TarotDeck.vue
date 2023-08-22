<template>
  <div class="deck">
    <div
      v-for="num in 78"
      :key="num"
      class="card"
      :style="{
        transform: 'rotate(' + 4.61538461538 * num + 'deg)',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
</script>

<style scoped>
.deck {
  position: relative;
  --card-height: 200px;
  width: calc(var(--card-height) * 2 - 2px);
  height: calc(var(--card-height) * 2 - 2px);
  background-color: black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  box-shadow: 0px 0px 0px 2px black;
  border-radius: 50%;
}

.card {
  position: absolute;
  left: 50%;
  transform-origin: left bottom;
  width: calc(var(--card-height) * 0.7);
  height: var(--card-height);
  background-color: lightblue;
  border: 1px solid black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 5px solid black;
  border-radius: 5px;
  clip-path: polygon(0% 0%, 18.5px 0%, 0% 100%);
  transition: box-shadow 0.5s;
}

.card:hover {
  clip-path: unset;
  z-index: 78;
  opacity: 60%;
  box-shadow: 0px 0px 0px 4px #cd28a4;
}

@media (max-width: 500px) {
  .deck {
    --card-height: 150px;
  }

  .card {
    border-width: 3px;
    clip-path: polygon(0% 0%, 13.7px 0%, 0% 100%);
  }
}
</style>
