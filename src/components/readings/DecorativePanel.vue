<template>
  <div
    class="container text-dark"
    :style="{
      'background-color': panelColor,
    }"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface Props {
  panelColor?: string;
}
withDefaults(defineProps<Props>(), {
  panelColor: '#7f3aad"',
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 599px;
  height: calc(100vh - 130px);
  min-height: 500px;
  opacity: 0.8;
  border-image-slice: 27 27 27 27;
  border-image-width: 15px 15px 15px 15px;
  border-image-outset: 8px 8px 8px 8px;
  border-image-repeat: stretch stretch;
  border-image-source: url(./src/assets/bi-panel-2.png);
  border-style: solid;
  margin: 15px;
}
</style>
