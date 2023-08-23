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
          class="menu-visibility"
        />

        <q-avatar square>
          <img src="~assets/tarot-time-logo.png" />
        </q-avatar>

        <q-toolbar-title class="title"> Время Таро </q-toolbar-title>
      </q-toolbar>

      <horizontal-menu :readings="readings" :links="links"></horizontal-menu>
    </q-header>

    <vertical-menu
      :open="leftDrawerOpen"
      :readings="readings"
      :links="links"
      @update-left-drawer-open="(isOpen) => (leftDrawerOpen = isOpen)"
    ></vertical-menu>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import HorizontalMenu from 'src/components/HorizontalMenu.vue';
import VerticalMenu from 'src/components/VerticalMenu.vue';
import { Link } from 'src/components/models.ts';

const allLinks: Link[] = [
  {
    title: 'Да или Нет?',
    link: 'https://quasar.dev',
    type: 'reading',
  },
  {
    title: 'Карта дня',
    link: 'https://github.com/quasarframework',
    type: 'reading',
  },
  {
    title: 'Линейные расклады',
    link: 'https://github.com/quasarframework',
    type: 'reading',
  },
  {
    title: 'Контакты',
    link: 'https://chat.quasar.dev',
    type: 'essential',
  },
];

const readings = computed(() => {
  return allLinks.filter((item) => item.type === 'reading');
});

const links = computed(() => {
  return allLinks.filter((item) => item.type === 'essential');
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.menu-visibility {
  display: none;
}

@media (max-width: 1023.99px) {
  .menu-visibility {
    display: flex;
  }
}

.title {
  font-family: 'vinqueregular';
  font-size: 30px;
}
</style>
