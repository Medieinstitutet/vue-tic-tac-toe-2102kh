<script setup lang="ts">
import { defineEmits } from 'vue';

defineEmits<{
   ( e:"restart"):void
}>()
</script>
const restartGame =()=>{
    emit('restart')
}
<template>
    <button @click="$emit('restart')">Starta om spelet</button>
</template>
<style scoped>
button {
  margin-top: 20px;
  padding: 20px 35px;
  font-size: 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}</style>
