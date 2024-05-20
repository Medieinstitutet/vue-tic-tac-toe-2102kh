<script setup lang="ts">
import { ref } from 'vue';
import Gamers from './components/Gamers.vue';
import { Gamer } from './models/Gamer';
const state =ref<Gamer[]>([])
</script>

<template>
  <Gamers/>
</template>

<style scoped>

</style>
