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

      <horizontal-menu :readings="config.READINGS" :links="config.LINKS"></horizontal-menu>
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
import { ref, computed } from 'vue';
import HorizontalMenu from 'src/components/HorizontalMenu.vue';
import VerticalMenu from 'src/components/VerticalMenu.vue';
import { config } from 'src/config/';


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
  background-image: url(/assets/bg-main.jpg);
  background-size: cover;
}
</style>
