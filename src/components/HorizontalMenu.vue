<template>
  <div class="hrzn-menu-container">
    <q-separator></q-separator>
    <nav
      style="
        background-image: url(/assets/bg-menu.jpg);
        background-repeat: repeat;
      "
    >
      <EssentialLink
        v-for="link in readings"
        :key="link.title"
        class="text-accent menu-reading"
        :link="link"
        :type="'horizontal'"
      />
      <q-space />
      <EssentialLink
        v-for="link in links"
        :key="link.title"
        class="text-accent menu-link"
        :link="link"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import { Link, Reading } from 'src/config/models';

defineProps<{
  readings: Reading[];
  links: Link[];
}>();
</script>

<style scoped>
.hrzn-menu-container {
  display: block;
}

.vrtl-menu-container {
  display: none;
}

@media (max-width: 1023.99px) {
  .hrzn-menu-container {
    display: none;
  }
}

.menu-reading {
  font-family: 'vinqueregular';
  font-size: 24px;
}

.menu-link {
  font-family: 'vinqueregular';
  font-size: 18px;
}

nav {
  display: flex;
  flex-wrap: wrap;
}
</style>
