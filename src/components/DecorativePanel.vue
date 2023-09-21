<template>
  <div
    class="container text-dark"
    :style="{
      'background-color': panelColor,
    }"
  >
    <header v-if="slots.header">
      <h2 class="panel-name">
        <slot name="header"></slot>
      </h2>
    </header>
    
    <div class="wrapper">
      <div class="main">
        <slot></slot>
      </div>
      <div class="action-panel" v-if="slots.actionPanel">
        <slot name="actionPanel"></slot>
      </div>
    </div>
  

    <footer class="text-accent" v-if="slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
const slots = useSlots();

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
  justify-content: flex-start;
  flex-basis: 599px;
  min-height: calc(var(--card-height) * 3 + 100px);
  border-image-slice: 27 27 27 27;
  border-image-width: 15px 15px 15px 15px;
  border-image-outset: 8px 8px 8px 8px;
  border-image-repeat: stretch stretch;
  border-image-source: url(/assets/bi-panel-2.png);
  border-style: solid;
  margin: 15px;
}

header {
  align-self: flex-start;
  background-color: #b67729;
  padding: 5px 7px 5px 7px;
  border-radius: 3px;
  margin: 13px auto 20px auto;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}

.main {
 width: 100%;
}

.panel-name {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 14px;
  max-width: 270px;
  text-wrap: balance;
}

.action-panel {
  padding-top: 50px;
  margin-bottom: 20px;
}

footer {
  padding: 7px 10px;
  align-self: end;
  background-color: #8d118a;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
  transition-delay: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
