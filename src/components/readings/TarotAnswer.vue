<template>
    <div class="container">
      <div class="row justify-center">
        <component :is="resultOfReading" v-if="store.answerVisibility"/>
        <div v-if="store.errorStatus" class="error text-negative">
              Ошибка получения толкования расклада
        </div>
     </div> 
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';


const store = useReadingStore();

const resultOfReading = computed(()=> {
        const sfx = store.suffixForAnswer;
        return defineAsyncComponent(() =>
            import(`./TarotAnswer${sfx}.vue`)
          );
        }
      )



</script>

<style scoped>
.error {
  padding: 50px 20px 20px 20px;
  font-weight: bolder;
  text-transform: uppercase;
}

.container {
  max-height: 600px;
  overflow-y: auto;
}


@media (max-width: 1900px) {
  .container {
    max-height: unset;
    overflow-y: unset;
}
}
</style>
