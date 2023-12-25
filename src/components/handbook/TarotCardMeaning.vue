<template>
  <div class="container">
    <div class="row justify-center">
      <section class="meaning-section">
        <span class="title text-primary">Арканы:</span> {{cardInList.group}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Ключевые слова:</span> {{cardInList.upright_keywords}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Ответ на Да/Нет вопрос:</span> {{cardInList.upright_yes}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">Общее значение:</span> {{cardInList.upright_meaning}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">В раскладе на отношения:</span> {{cardInList.upright_love}}
      </section>
      <section class="meaning-section">
        <span class="title text-primary">В раскладе на ситуацию:</span> {{cardInList.upright_situation}}
      </section>
      <div v-if="store.errorStatus" class="error text-negative">
            Ошибка получения толкования расклада
      </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useReadingStore } from 'src/stores/reading-store';
import { storeToRefs } from 'pinia';

const store = useReadingStore();
const { cardInList } = storeToRefs(store);

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
