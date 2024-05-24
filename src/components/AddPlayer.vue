
<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

const userInput = ref("");
const oPlayer = "O-SPELARE";
const xPlayer = "X-SPELARE";

defineProps<{ players: Player[] }>();

const emit = defineEmits<{
  (e: "add-player", name: string): void;
}>();

const handleSubmit = () => {
  emit("add-player", userInput.value);
  userInput.value = "";
};

</script>

<template>
  <div class="app">
    <section class="player-section">
      <h3 v-if="players.length == 0">Lägg till {{ xPlayer }}</h3>
      <h3 v-else-if="players.length < 2 && players.length > 0">Lägg till {{ oPlayer }}</h3>
    </section>
    <form @submit.prevent="handleSubmit" class="player-form">
      <input type="text" v-model="userInput" placeholder="Vem ska spela?" class="input"/>
      <button class="save-button">Spara</button>
    </form>
    <span v-if="players.length > 0" class="player-list">
      <h2>Spelare:</h2>
      <ul>
        <li v-for="player in players" :key="player.playerName" class="player-item">
         <h3>{{ player.playerName }}</h3>  Poäng:<h4>{{ player.point }}</h4>  Tur:<h4>{{ player.turn ? 'Ja' : 'Nej' }}</h4>
       </li>
      </ul>
    </span>
  </div>
</template>

<style scoped>
 .app {
  background-color: rgb(253, 247, 238);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15%;
}
section {
  text-align: center;
  margin-bottom: 20px;

 
}
.player-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 25px;
  margin: 10px 35px;
}
.input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  font-size: 16px;
}
.player-item {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.save-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.save-button:hover {
  background-color: #45a049;
}
h4{
  margin: 10px;
 
}
h3{
  margin-right: 10px;
  color: rgb(87, 3, 3);
}
</style>

    















