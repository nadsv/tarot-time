<template>
  <q-item v-if="!subReadings" clickable tag="a" target="_blank" :href="link" >
    <q-item-section>
      <q-item-label class="text-accent">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-expansion-item
        v-else
        :label="title"
        header-class="text-accent"
      >
      <q-list>
        <q-item v-for="subLink in subReadings" :key="subLink.id" clickable tag="a" target="_blank" :href="subLink.link" class="menu-sub-reading">
          <q-item-section>
            <q-item-label class="text-accent">{{ subLink.title }}</q-item-label>
          </q-item-section>
      </q-item>
      </q-list> 
  </q-expansion-item>
</template>

<script setup lang="ts">
import { Link, Reading } from 'src/config/models';

withDefaults(defineProps<Link | Reading>(), {
  link: '#'
});
</script>

<style scoped>

.menu-sub-reading {
  font-size: 16px;
}
</style>
