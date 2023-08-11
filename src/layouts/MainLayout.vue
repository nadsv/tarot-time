<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar square >
          <img src="~assets/tarot-time-logo.png">
        </q-avatar>

        <q-toolbar-title>
          ВРЕМЯ ТАРО
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-secondary"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-accent menu-item"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'ДА/НЕТ',
    caption: 'Быстрый ответ на конкретный вопрос',
    link: 'https://quasar.dev'
  },
  {
    title: 'КАРТА ДНЯ',
    caption: 'Расклад на день',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Контакты',
    link: 'https://chat.quasar.dev'
  },
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.menu-item {
  font-family: 'Bad Script', sans-serif;
  font-size: 30px;
  font-weight: 900;
}
</style>