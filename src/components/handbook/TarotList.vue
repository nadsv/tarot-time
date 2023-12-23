<template>
  <q-input
    v-model="search"
    debounce="200"
    placeholder="Поиск"
    dense
    borderless
    autofocus
    class="search-input"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
  <div class="list-container">
    <q-chip
      v-for="card in filteredList"
      :key="card.id"
      size="12px"
      square
      clickable
      :style="{ 'background-color': color(card.group) }"
      text-color="accent"
      >{{ card.name }}</q-chip
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { color } from 'src/utils/helpers.ts';

const store = useReadingStore();
const search = ref('');

onMounted(() => {
  store.getList();
});

const filteredList = computed(() =>
  store.listOfCards.filter((item) =>
    item.name.includes(search.value.toUpperCase())
  )
);
</script>

<style scoped>
.search-input {
  border: 3px dotted #b67729;
  margin: 0 10px 0 10px;
  padding: 0 5px;
}
.list-container {
  padding: 10px;
  margin-bottom: auto;
}
</style>
