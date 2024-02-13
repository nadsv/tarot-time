<template>
    <div class="container">
      <div class="row justify-center" id="wrapper-id">
        <q-icon @click="copyToClipboard" class="clipboard-icon" name="content_paste" color="primary" size="24px"/>
        <component :is="resultOfReading" v-if="store.answerVisibility"/>
        <div v-if="store.errorStatus" class="error text-negative">
              Ошибка получения толкования расклада
        </div>
     </div> 
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { copyTextFromChildren } from 'src/utils/helpers';


const store = useReadingStore();

const resultOfReading = computed(()=> {
        const sfx = store.suffixForAnswer;
        return defineAsyncComponent(() =>
            import(`./TarotAnswer${sfx}.vue`)
          );
        }
      )

const copyToClipboard = ()=>{
  copyTextFromChildren('wrapper-id');
}

</script>

<style scoped>
.clipboard-icon {
  display: none;
  position: absolute;
  right: 20px;
}

#wrapper-id:hover .clipboard-icon, #wrapper-id:active .clipboard-icon {
  display: block;
  cursor: pointer;
}

.error {
  padding: 50px 20px 20px 20px;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
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
