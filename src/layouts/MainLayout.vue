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

        <q-avatar square class="logo">
          <img
            src="~assets/tarot-time-logo.png"
            width="38"
            height="38"
            alt="Лого Момент Таро"
          />
        </q-avatar>

        <q-toolbar-title class="title"> Момент Таро </q-toolbar-title>
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
import { ref, watch, onMounted } from 'vue';
import HorizontalMenu from 'src/components/HorizontalMenu.vue';
import VerticalMenu from 'src/components/VerticalMenu.vue';
import { config } from 'src/config/';
import { useRoute } from 'vue-router';
import { useReadingStore } from 'src/stores/reading-store';

const route = useRoute();
let store = useReadingStore();

const changeReading = (params) => {
  const id = params.reading;
  const subId = params.subreading;
  if (subId) {
    const owner = config.READINGS.filter((item) => item.id === +id)[0];
    store.reading = owner.subReadings.filter((item) => item.id === +subId)[0];
    store.resetState();
    return;
  }
  if (id) {
    store.reading = config.READINGS.filter((item) => item.id === +id)[0];
    store.resetState();
  }
};

onMounted(() => {
  const params = route.params;
  changeReading(params);
});

watch(
  () => route.params,
  (params) => {
    changeReading(params);
  }
);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.logo {
  margin-left: 10px;
}

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
