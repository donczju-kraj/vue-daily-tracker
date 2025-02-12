<template>
  <div>
    <input class="" type="text" v-model="newTaskTitle" placeholder="Dodaj nowe zadanie">
    <button @click="addTask">Dodaj</button>
  </div>
</template>

<script setup lang="ts">
import ref from 'vue';
const newTaskTitle = ref('');

</script>