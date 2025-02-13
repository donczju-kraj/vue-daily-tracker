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
import { computed } from 'vue';

import { useTaskStore } from './stores/taskStore';
import NewTask from './NewTask.vue';
import Task from './Task.vue';

const taskStore = useTaskStore();

const day = computed(() => taskStore.currentDay);
const tasks = computed(() => taskStore.getTasksForCurrentDay);

interface Task {
  id: number,
  title: string,
  completed: boolean,
}


const addTask = (newTask: string) => {
  if (newTask.trim() !== '') {
    taskStore.addTask(newTask);
  }
};

const updateTask = (updatedTask: Task) => {
  taskStore.updateTask(updatedTask);
};

const removeTask = (taskId: number) => {
  taskStore.removeTask(taskId);
}

const removeCompletedTasks = () => {
  taskStore.removeCompletedTasks();
}
</script>
