<template>
  <q-page class="row justify-evenly bckgrnd">
    <decorative-panel panel-color="rgba(127,58,173, 0.8)">
      <template v-slot:header> Контакты </template>
      Контакты
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';


</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}
</style>
