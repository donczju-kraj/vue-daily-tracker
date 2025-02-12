<template>
  <form @submit.prevent="addTask" class="my-4 flex space-x-2 justify-between">
    <input 
      class="px-2 border-2 border-gray-900 rounded bg-gray-200 text-gray-800 text-sm" 
      type="text" 
      v-model="newTaskTitle" 
      placeholder="Add new task"/>
    <button 
      class="font-semibold bg-green-800 px-3 py-1 rounded-full text-sm transition ease-in-out duration-300 delay-150 hover:scale-105 hover:cursor-pointer" 
      type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['task-added']);

const addTask = () => {
  if(newTaskTitle.value.trim() !== '') {
    emit('task-added', newTaskTitle.value.trim());
    newTaskTitle.value = '';
  }
}
const newTaskTitle = ref('');

</script>