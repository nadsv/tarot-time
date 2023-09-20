<template>
  <div class="row q-gutter-md justify-center">
    <component :is="resultOfReading"/>
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

</style>
