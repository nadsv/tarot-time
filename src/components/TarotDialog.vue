<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-white side-panel">
          <q-img
            :src="link"
            spinner-color="white"
            class="rounded-borders large-image"
          >
          </q-img>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const showDialog = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>

<style scoped>
.large-image {
  width: 240px;
  height: 417px;
}
</style>
