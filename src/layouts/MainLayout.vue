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
      <div class="hrzn-menu-container">
        <q-separator></q-separator>
        <q-toolbar
          style="
            background-image: url(./src/assets/bg-menu.jpg);
            background-repeat: repeat;
          "
        >
          <EssentialLink
            v-for="link in readings"
            :key="link.title"
            v-bind="link"
            class="text-accent menu-reading"
          />
          <q-space />
          <EssentialLink
            v-for="link in links"
            :key="link.title"
            v-bind="link"
            class="text-accent menu-link"
          />
        </q-toolbar>
      </div>
    </q-header>
    <div class="vrtl-menu-container">
      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        :width="270"
        style="
          background-image: url(./src/assets/bg-menu.jpg);
          background-repeat: repeat;
        "
      >
        <q-list>
          <EssentialLink
            v-for="link in readings"
            :key="link.title"
            v-bind="link"
            class="text-accent menu-reading"
          />
        </q-list>
        <q-separator spaced />
        <q-list>
          <EssentialLink
            v-for="link in links"
            :key="link.title"
            v-bind="link"
            class="text-accent menu-link"
          />
        </q-list>
      </q-drawer>
    </div>

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

const readings: EssentialLinkProps[] = [
  {
    title: 'Да или Нет?',
    link: 'https://quasar.dev',
  },
  {
    title: 'Карта дня',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Линейные расклады',
    link: 'https://github.com/quasarframework',
  },
];

const links: EssentialLinkProps[] = [
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
.menu-visibility {
  display: none;
}

.hrzn-menu-container {
  display: block;
}

.vrtl-menu-container {
  display: none;
}

@media (max-width: 1023.99px) {
  .menu-visibility {
    display: flex;
  }

  .hrzn-menu-container {
    display: none;
  }

  .vrtl-menu-container {
    display: block;
  }
}

.title {
  font-family: 'vinqueregular';
  font-size: 30px;
}

.menu-reading {
  font-family: 'vinqueregular';
  font-size: 24px;
}

.menu-link {
  font-family: 'vinqueregular';
  font-size: 18px;
}
</style>
