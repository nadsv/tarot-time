<template>
  <div class="row q-gutter-sm">
    <div v-for="num in 3" :key="num" class="card"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
</script>

<style scoped>
.card {
  width: calc(var(--card-height) * 0.65);
  height: var(--card-height);
  background-color: lightblue;
  border: 1px solid rgb(0, 0, 0);
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 3px solid black;
  border-radius: 10px;
}
</style>
