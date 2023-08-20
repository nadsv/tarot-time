<template>
  <div class="deck">
    <div
      v-for="num in 78"
      :key="num"
      class="card"
      :style="{
        transform: 'rotate(' + 4.61538461538 * num + 'deg)',
      }"
    >
      {{ num }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const cards = ref([0, 1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12]);

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>

<style scoped>
.deck {
  width: 100%;
  position: relative;
}

.card {
  position: absolute;
  left: 50%;
  bottom: -300px;
  transform-origin: left bottom;
  width: 150px;
  height: 200px;
  background-color: lightblue;
  border: 1px solid black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 5px solid black;
  border-radius: 5px;
  clip-path: polygon(0% 0%, 18.5px 0%, 0% 100%);
}

.card:hover {
  clip-path: unset;
  z-index: 78;
  opacity: 70%;
  border: none;
  box-shadow: 0px 0px 0px 6px #cd28a4;
}
</style>
