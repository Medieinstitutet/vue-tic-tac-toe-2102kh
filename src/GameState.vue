<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Player } from './models/Player';
import GameBoard from './components/GameBoard.vue';
import AddPlayer from './components/AddPlayer.vue';

const players = ref<Player[]>([]);
const showGame = ref(false);
const gameHistory = ref<string[]>([]);

const savePlayersToLocalStorage = () => {
  localStorage.setItem('players', JSON.stringify(players.value));
};

const loadPlayersFromLocalStorage = () => {
  const storedPlayers = localStorage.getItem('players');
  if (storedPlayers) {
    players.value = JSON.parse(storedPlayers).map((p: Player) => new Player(p.playerName, p.point, p.turn));
  }
};

onMounted(() => {
  loadPlayersFromLocalStorage();
});

const addPlayer = (name: string) => {
  if (name !== "" && players.value.length < 2) {
    const playerName = name;
    const point = 0;
    const turn = players.value.length === 0;

    players.value.push(new Player(playerName, point, turn));
    savePlayersToLocalStorage();
  }
};

const startGame = () => {
  showGame.value = true;
};

const resetGame = () => {
  players.value = [];
  gameHistory.value = [];
  showGame.value = false;
  savePlayersToLocalStorage();
};

watch(gameHistory, (newHistory) => {
  // Uppdatera poängen baserat på spelhistoriken
  newHistory.forEach((entry) => {
    if (entry.includes('Vinnare')) {
      const playerName = entry.split(' ')[1];
      const player = players.value.find(p => p.playerName === playerName);
      if (player) {
        player.point++;
      }
    }
  });
  savePlayersToLocalStorage();
});

</script>

<template>
  <div class="app">
  <AddPlayer @add-player="addPlayer" :players="players" v-if="!showGame"/>
  <GameBoard :players="players" :gameHistory="gameHistory" v-else></GameBoard>
<div class="buttons">
  <button v-if="!showGame" @click="startGame" class="start-button" :disabled="players.length !== 2">Börja spela spel</button>
  <button @click="resetGame" class="reset-button">Återställ spel</button>
</div>
</div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap:15px;
}

.start-button,
.reset-button {
  padding: 12px 23px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button {
  background-color: #007BFF;
}

.reset-button {
  background-color: #e71022;
}

.reset-button:hover {
  background-color: #E04E2F;
}

.start-button:hover {
  background-color: #006FDD;
}

</style>


