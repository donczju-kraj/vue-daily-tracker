<template>
  <div class="p-4 border border-gray-200 rounded-3xl">
    <h2 class="border-b border-gray-200 text-xl font-semibold mb-6">Your to-do list for {{ day }}</h2>
    <NewTask @task-added="addTask" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <Task :task="task" @task-updated="updateTask" @task-removed="removeTask" />
      </li>
    </ul>
    <div class="my-4 flex space-x-2 items-center justify-between">
      <p class="font-semibold text-sm">Remove completed tasks:</p>
      <button
        class="px-3 py-1 font-semibold text-sm bg-gray-400 text-gray-800 border border-gray-200 rounded-full transition delay-150 duration-300 ease-in-out hover:scale-105"
        @click="removeCompletedTasks">Trash</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import NewTask from './NewTask.vue';
import Task from './Task.vue';

const props = defineProps<{
  day: string;
}>();

interface Task {
  id: number,
  title: string,
  completed: boolean,
}

const tasks = ref([
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Prepare dinner', completed: true }
]);


const addTask = (newTask: string) => {
  if (newTask.trim() !== '') {
    tasks.value.push({
      id: Date.now(),
      title: newTask.trim(),
      completed: false
    });
  }
};

const updateTask = (updatedTask: Task) => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value.splice(index, 1, updatedTask);
  }
};

const removeTask = (taskId: number) => {
  const index = tasks.value.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.value.splice(index, 1)
  };
}

const removeCompletedTasks = () => {
  tasks.value = tasks.value.filter(task => !task.completed);
}
</script>

<style scoped>
/* Dodaj style dla komponentu TodoList */
</style>