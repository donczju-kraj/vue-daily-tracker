<template>
  <button 
    @click="$emit('click')" 
    class="px-3 py-2 bg-gray-200 text-gray-800 text-sm font-semibold text-center rounded-full hover:font-bold transition ease-in-out duration-300 delay-150 hover:scale-105">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
const emit = defineEmits(['click']);

</script>