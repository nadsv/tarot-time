<template>
  <div v-if="store.cardInList.id" class="row justify-center wrapper">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ store.cardInList.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-white side-panel">
          <q-img
            :src="link"
            spinner-color="white"
            class="rounded-borders large-image"
          >
          </q-img>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';

const store = useReadingStore();

const link = computed(
  () => `/assets/cards-rider%E2%80%93waite/${store.cardInList.id}.png`
);

const togglePostion = (position: string)=>{
  store.cardInList.position = position
}
</script>

<style scoped>
.large-image {
  width: 240px;
  height: 417px;
}

.wrapper {
  margin-bottom: 20px;
}


</style>
