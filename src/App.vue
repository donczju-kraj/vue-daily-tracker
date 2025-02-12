<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import Task from './components/Task.vue';
import DayPicker from './components/DayPicker.vue';
import HelloWorld from './components/HelloWorld.vue';

import { ref, computed } from 'vue';

const currentDay = ref(new Date());
const currentDayFormatted = computed(() => {
    return currentDay.value.toLocaleDateString(); // Formatowanie daty
});

const updateCurrentDay = (newDay) => {
  currentDay.value = newDay;
};
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <TodoList :day="currentDay.toLocaleDateString()" />
  <DayPicker @day-changed="updateCurrentDay"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
