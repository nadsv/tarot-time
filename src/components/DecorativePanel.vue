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
    <div class="row">
      <div class="left-hint text-accent" v-if="slots.leftHint">
        <slot name="leftHint"></slot>
      </div>

      <div class="right-hint text-accent" v-if="slots.rightHint">
        <slot name="rightHint"></slot>
      </div>
    </div>

    <div class="wrapper">
      <div class="main">
        <slot></slot>
      </div>
      <div class="action-panel" v-if="slots.actionPanel">
        <slot name="actionPanel"></slot>
      </div>
    </div>
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
  flex-basis: 580px;
  border-image-slice: 27 27 27 27;
  border-image-width: 15px 15px 15px 15px;
  border-image-outset: 8px 8px 8px 8px;
  border-image-repeat: stretch stretch;
  border-image-source: url(/assets/bi-panel-2.png);
  border-style: solid;
  margin: 15px;
  position: relative;
}

header {
  align-self: flex-start;
  background-color: #b67729;
  padding: 5px 7px 5px 7px;
  border-radius: 3px;
  margin: 13px auto 20px auto;
  text-align: center;
  text-wrap: balance;
  line-height: 29px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 2;
}

.panel-name {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 16px;
}

.action-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
  height: 46px;
}

@media (max-width: 413px) {
  .action-panel {
    height: 70px;
  }
}

.left-hint {
  position: absolute;
  top: 60px;
  left: 4px;
  max-width: 120px;
  padding: 4px;
  border: 3px dotted #b67729;
  font-size: 10px;
  text-align: center;
  border-radius: 35px;
}

.right-hint {
  position: absolute;
  top: 60px;
  right: 4px;
  padding: 4px;
  border: 3px dotted #b67729;
  font-size: 10px;
  text-align: center;
  border-radius: 35px;
  max-width: 150px;
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
