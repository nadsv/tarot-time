<template>
  <div class="row q-gutter-md justify-center">
    <component :is="resultOfReading" v-if="store.answerVisibility"/>
    <div v-if="store.errorStatus" class="error text-negative">
      Ошибка получения толкования расклада
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
  transition-delay: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
