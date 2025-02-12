<template>
  <div class="flex items-center justify-between space-x-4 p-2.5 border-b border-gray-200">
    <input type="checkbox" v-model="task.completed">
    <span class="font-semibold text-sm" :class="{ 'line-through text-gray-400': task.completed }">{{ task.title }}</span>
    <button
      class="font-semibold bg-red-800 px-3 py-1 rounded-full text-xs text-red-100 transition ease-in-out delay-150 duratoin-300 hover:scale-105"
      @click="removeTask">Remove</button>
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

const emit = defineEmits(['task-updated', 'task-removed']);

const completed = ref(props.task.completed);

watch(completed, (newValue) => {
  emit('task-updated', { ...props.task, completed: newValue });
});

const removeTask = () => {
  emit('task-removed', props.task.id);
}
</script>

<style scoped>
/* Dodaj style dla komponentu Task */
</style>