<template>
  <q-expansion-item
    :label="link.title"
    header-class="text-accent"
    default-opened
  >
    <q-list>
      <q-item
        v-for="subLink in link.subReadings"
        :key="subLink.id"
        clickable
        tag="a"
        :to="subLink.link"
        class="menu-sub-reading"
      >
        <q-item-section>
          <q-item-label class="text-accent">{{ subLink.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script setup lang="ts">
import { Reading } from 'src/config/models';

defineProps<{
  link: Reading;
}>();
</script>

<style scoped>
.menu-sub-reading {
  font-size: 16px;
}
</style>
