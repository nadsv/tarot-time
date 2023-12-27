<template>
  <div class="container">
    <div class="row justify-center">
      <section class="meaning-section">
        <span class="title text-primary">Арканы:</span> {{cardInList.group}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Ключевые слова:</span> {{field('keywords')}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Ответ на Да/Нет вопрос:</span> {{field('yes')}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Общее значение:</span> {{field('meaning')}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">В раскладе на отношения:</span> {{field('love')}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">В раскладе на ситуацию:</span> {{ field('situation') }}
      </section>
      <div v-if="store.errorStatus" class="error text-negative">
            Ошибка получения толкования расклада
      </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { cardInList } = storeToRefs(store);


const togglePostion = (position: string)=>{
        cardInList.position === position
}

const field = (field: string): string => {
  return store.cardInList[store.cardInList.position + '_' + field]
}

</script>

<style scoped>
.container {
  margin: 0px 15px 0px 15px;
  padding: 0 10px;
  max-height: 600px;
  overflow-y: auto;
}


@media (max-width: 1900px) {
  .container {
    max-height: unset;
    overflow-y: unset;
  }
}

.meaning-section {
  width: 100%;
  text-align: justify;
}

.meaning-section:not(:last-child) {
  margin-bottom: 10px;
}
.title {
  font-weight: bold;
}

</style>
