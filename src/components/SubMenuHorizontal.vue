<template>
   <q-btn flat no-caps class="text-accent" :label="link.title"  padding="0px 15px">
        <q-menu  style="
        background-image: url(./src/assets/bg-menu.jpg);
        background-repeat: repeat;
      ">
          <q-list style="min-width: 100px">
             <q-item v-for="subLink in link.subReadings" :key="subLink.id" clickable tag="a" :to="subLink.link" class="menu-sub-reading">
              <q-item-section>
                <q-item-label class="text-accent">{{ subLink.title }}</q-item-label>
              </q-item-section>
           </q-item>
          </q-list>
        </q-menu>
      </q-btn>
</template>

<script setup lang="ts">
import { Reading } from 'src/config/models';

defineProps<{
  link: Reading;
}>();
</script>

<style scoped>

.menu-sub-reading {
  font-family: 'vinqueregular';
  font-size: 20px;
}
</style>
