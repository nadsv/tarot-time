<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-avatar square>
          <img src="~assets/tarot-time-logo.png" />
        </q-avatar>

        <q-toolbar-title class="title"> Время Таро </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-image: url(./src/assets/bg-menu.jpg)"
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
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Да/Нет',
    link: 'https://quasar.dev',
  },
  {
    title: 'Карта дня',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Контакты',
    link: 'https://chat.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.title {
  font-family: 'vinqueregular';
  font-size: 30px;
}
.menu-item {
  font-family: 'vinqueregular';
  font-size: 24px;
}

.bckgrnd-menu {
  background-image: url(./src/assets/bg-menu.jpg);
  background-size: cover;
}
</style>
