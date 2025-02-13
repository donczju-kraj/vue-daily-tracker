<template>
  <div class="mt-4 flex items-center space-x-3 justify-between">
    <Button @click="prevDay">Previous day</Button>
    <span class="font-semibold text-sm">{{ currentDayFormatted }}</span>
    <Button @click="nextDay">Next day</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { useTaskStore } from './stores/taskStore';
import Button from './commons/Button.vue';

const taskStore = useTaskStore();

const currentDay = ref(new Date());

const currentDayFormatted = computed(() => {
  return currentDay.value.toLocaleDateString();
});


const prevDay = () => {
  currentDay.value = new Date(currentDay.value.setDate(currentDay.value.getDate() - 1));
  taskStore.setCurrentDate(currentDay.value.toLocaleDateString())
};

const nextDay = () => {
  currentDay.value = new Date(currentDay.value.setDate(currentDay.value.getDate() - 1));
  taskStore.setCurrentDate(currentDay.value.toLocaleDateString())
};
</script>