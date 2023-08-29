<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { Link, Reading } from 'src/config/models';

withDefaults(defineProps<Link | Reading>(), {
  link: '#',
});
</script>
