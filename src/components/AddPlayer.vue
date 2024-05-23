
<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

const userInput = ref("");
// const players = ref<Player[]>([]);
const oPlayer = "O-SPELARE";
const xPlayer = "X-SPELARE";

defineProps<{players: Player[]}>();

const emit = defineEmits<{
  (e: "addPlayer", name: string): void;
}>();

const handleSubmit = () => {
  emit("addPlayer", userInput.value);
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
      <!-- <label for="namn" /> -->

      <button class="save-button">Spara</button>
    </form>
    <span v-if="players.length > 0" class="player-list">
      <h3>Spelare:</h3>
      <ul>
        <li v-for="player in players" 
        :key="player.playerName"
        class="player-item"
        >
         <h3>{{ player.playerName }}</h3>  Poäng:<h4>{{ player.point }}</h4>  Tur:<h4>{{ player.turn ? 'Ja' : 'Nej' }}</h4>
       </li>
      </ul>
    </span>
    
  </div>
  </template>

<style scoped>
.app{
  background-color: rgb(253, 247, 238);
  padding: 100px 120px;
}
section{
    text-align: center;
    margin-bottom: 20px;
    padding: 10px 25px;
    background-color:rgb(247, 252, 180);;
}
.player-form{
    display: flex;
    align-items: center;
    gap:15px;
    margin-bottom: 25px;
}
.input{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  font-size: 16px;

}
.player-item{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.save-button{
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color:#4CAF50;;
color: white;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s;
}
.save-button:hover {
 background-color: #45a049;
}

</style>  
























<!-- <script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';
const userInput = ref("");
const players = ref("")
const oPlayer ="O-SPELARE";
const xPlayer ="X-SPELARE";

const emit=defineEmits<{
    (e:"add",text:string):void
}>()

const handleSubmit=()=>{
    // if(userInput.value !==""  && players.value.length)
    //  players.value.push(new Player(userInput.value))
    emit("add",userInput.value)
    userInput.value="";
    }
 
</script>
<template>
     <section>       
    <span v-if = "players.length == 0">Lägg till {{ xPlayer }}</span>
    <span v-else-if="players.length<2 && players.length > 0">Lägg till {{ oPlayer }}</span>
    </section> -->
   <!-- <form @submit.prevent="handleSubmit">
        <input type="text" v-model="userInput" />
        <button>Spara</button>
    </form> 
    
</template>
<style></style> -->
<!-- //    if( userInput.value != ""){
    //    emit("add",userInput.value);
    //    userInput.value="";
       
    //    }; -->
     <!-- <h3 v-if="players.length==0">Lägg till spelare X</h3>
        <h3 v-else-if=" players.length<2 && players.length > 0">Lägg till spelare O</h3> -->