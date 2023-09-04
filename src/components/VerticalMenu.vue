<template>
  <div class="vrtl-menu-container">
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="280"
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
          class="menu-reading"
        />
      </q-list>
      <q-separator spaced />
      <q-list>
        <EssentialLink
          v-for="link in links"
          :key="link.title"
          v-bind="link"
          class="menu-link"
        />
      </q-list>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { Link, Reading } from 'src/config/models';

const props = defineProps<{
  readings: Link[];
  links: Reading[];
  open: boolean;
}>();

const leftDrawerOpen = ref(false);

const emit = defineEmits<{
  updateLeftDrawerOpen: [value: boolean];
}>();

watch(
  () => props.open,
  () => {
    if (leftDrawerOpen.value !== props.open) {
      leftDrawerOpen.value = props.open;
    }
  }
);

watch(
  () => leftDrawerOpen.value,
  () => {
    emit('updateLeftDrawerOpen', leftDrawerOpen.value);
  }
);
</script>

<style scoped>
.vrtl-menu-container {
  display: none;
}

@media (max-width: 1023.99px) {
  .vrtl-menu-container {
    display: block;
  }
}

.menu-reading {
  font-family: 'vinqueregular';
  font-size: 20px;
}

.menu-link {
  font-family: 'vinqueregular';
  font-size: 18px;
}
</style>
