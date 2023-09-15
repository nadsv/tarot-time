<template>
  <q-layout view="lHh Lpr lFf" class="bckgrnd">
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

      <horizontal-menu
        :readings="config.READINGS"
        :links="config.LINKS"
      ></horizontal-menu>
    </q-header>

    <vertical-menu
      :open="leftDrawerOpen"
      :readings="config.READINGS"
      :links="config.LINKS"
      @update-left-drawer-open="(isOpen) => (leftDrawerOpen = isOpen)"
    ></vertical-menu>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import HorizontalMenu from 'src/components/HorizontalMenu.vue';
import VerticalMenu from 'src/components/VerticalMenu.vue';
import { config } from 'src/config/';
import { useRoute } from 'vue-router';
import { useReadingStore } from 'src/stores/reading-store';

const route = useRoute();
let store = useReadingStore();

watch(
  () => route.params,
  (params) => {
    const id = params.reading;
    const subId = params.subreading;
    if (subId) {
      const owner = config.READINGS[+id];
      store.reading = owner.subReadings[+subId];
      store.resetState();
      return;
    }
    if (id) {
      store.reading = config.READINGS[+id];
      store.resetState();
    }
  }
);

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

.bckgrnd {
  background-image: url(/assets/bg-page.jpg);
  background-repeat: repeat;
}
</style>
