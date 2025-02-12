<template>
  <div class="p-4 border border-gray-200 rounded-3xl">
    <h2 class="border-b border-gray-200 text-xl font-semibold mb-6">Your to-do list for {{ day }}</h2>
    <NewTask @task-added="addTask" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <Task :task="task" @task-updated="updateTask" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import NewTask from './NewTask.vue';
import Task from './Task.vue';

const props = defineProps<{
  day: string;
}>();

const tasks = ref([
  { id: 1, title: 'Zrobić zakupy', completed: false },
  { id: 2, title: 'Ugotować obiad', completed: true }
]);


const addTask = (newTask) => {
  if (newTask.trim() !== '') {
    tasks.value.push({
      id: Date.now(),
      title: newTask.trim(),
      completed: false
    });
    newTaskTitle.value = '';
  }
};

const updateTask = (updatedTask) => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value.splice(index, 1, updatedTask);
  }
};
</script>

<style scoped>
/* Dodaj style dla komponentu TodoList */
</style>