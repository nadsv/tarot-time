<template>
  <q-item v-if="!link.subReadings" clickable tag="a"  :to="link.link" >
    <q-item-section>
      <q-item-label class="text-accent">{{ link.title }}</q-item-label>
    </q-item-section>
  </q-item>
  <sub-menu-vertical
        v-else-if="type === 'vertical'"
        :link="link"
      >
  </sub-menu-vertical>
  <sub-menu-horizontal
        v-else-if="type === 'horizontal'"
        :link="link"
      >
  </sub-menu-horizontal>
</template>

<script setup lang="ts">
import { Link, Reading } from 'src/config/models';
import  subMenuVertical from 'components/SubMenuVertical.vue';
import  subMenuHorizontal from 'components/SubMenuHorizontal.vue';

defineProps<{
  link: Reading | Link;
  type?: string;
}>();
</script>

<style scoped>

.menu-sub-reading {
  font-size: 16px;
}
</style>
