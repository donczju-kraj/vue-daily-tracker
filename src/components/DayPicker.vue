<template>
  <div class="mt-4 flex items-center space-x-3 justify-between">
    <Button @click="prevDay">Previous day</Button>
    <span class="font-semibold text-sm">{{ currentDayFormatted }}</span>
    <Button @click="nextDay">Next day</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Button from './commons/Button.vue';

const currentDay = ref(new Date());

const currentDayFormatted = computed(() => {
  return currentDay.value.toLocaleDateString();
});

const emit = defineEmits(['day-changed']);

const prevDay = () => {
  currentDay.value = new Date(currentDay.value.setDate(currentDay.value.getDate() - 1));
  emit('day-changed', new Date(currentDay.value));
};

const nextDay = () => {
  currentDay.value = new Date(currentDay.value.setDate(currentDay.value.getDate() + 1));
  emit('day-changed', new Date(currentDay.value));
};
</script>