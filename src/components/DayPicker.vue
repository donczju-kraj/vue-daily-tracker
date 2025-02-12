<template>
  <div>
    <button @click="prevDay">Previous day</button>
    <span>{{ currentDayFormatted }}</span>
    <button @click="nextDay">Next day</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const currentDay = ref(new Date());

const currentDayFormatted = computed(() => {
  return currentDay.value.toLocaleDateString(); // Formatowanie daty
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

<style scoped>
/* Dodaj style dla komponentu DayPicker */
</style>