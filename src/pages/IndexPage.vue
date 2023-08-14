<template>
  <q-page class="row items-center justify-evenly bckgrnd">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
$q.dark.set(true);

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});
</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}
</style>
