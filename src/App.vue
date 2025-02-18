<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import DayPicker from './components/DayPicker.vue';
import Products from './components/products/Products.vue';

import { ref } from 'vue';

const currentDay = ref(new Date());

const updateCurrentDay = (newDay: Date) => {
  currentDay.value = newDay;
};
</script>

<template>
  <TodoList :day="currentDay.toLocaleDateString()" />
  <DayPicker @day-changed="updateCurrentDay" />
  <hr class="ruler" />
  <Products />
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

.ruler {
  margin: 20px 0px;
  color: green;
}
</style>
