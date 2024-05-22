<script setup lang="ts">
import { ref } from 'vue';
import { Player } from './models/Player';
import GameBoard from './components/GameBoard.vue';
import AddPlayer from './components/AddPlayer.vue';

const players =ref<Player[]>([])
const showGame = ref(false);

const addPlayer = (name: string) => {
  if (name !== "" && players.value.length < 2) {
    const playerName =name;
    // const playerName = players.value.length === 0 ? xPlayer : oPlayer;
    const point= 0;
    const turn = players.value.length=== 0;

    players.value.push(new Player(playerName, point, turn));
    console.log(playerName);
  }
}

const startGame = () => {
showGame.value = true;
}
  
</script>

<template>
  <AddPlayer @add-player="addPlayer" :players="players" v-if="!showGame"/>
  <GameBoard :players="players" v-else></GameBoard>

  <button @click="startGame" class="start-button" :disabled="players.length !== 2">Börja spela spel</button>
</template>

<style scoped>
.start-button{
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: #007BFF;
color: white;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s;
margin-top: 10px;
}

</style>
