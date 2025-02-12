<template>
  <div class="flex items-center space-x-4 p-2.5 border-b border-gray-200">
    <input type="checkbox" v-model="task.completed">
    <span :class="{ 'line-through text-gray-400': task.completed }">{{ task.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps<{
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}>();

const emit = defineEmits(['task-updated']);

const completed = ref(props.task.completed);

watch(completed, (newValue) => {
  emit('task-updated', { ...props.task, completed: newValue });
});
</script>

<style scoped>
/* Dodaj style dla komponentu Task */
</style>