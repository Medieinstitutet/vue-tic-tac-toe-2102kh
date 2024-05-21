
<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';


// Reactive references
const userInput = ref("");
const players = ref<Player[]>([]);
const oPlayer = "O-SPELARE";
const xPlayer = "X-SPELARE";

// Handle form submission to add players
const handleSubmit = () => {
  if (userInput.value !== "" && players.value.length < 2) {
    const playerName =userInput.value;
    // const playerName = players.value.length === 0 ? xPlayer : oPlayer;
    const point= 0;
    const turn = players.value.length=== 0;

    players.value.push(new Player(playerName,point, turn));
    userInput.value = "";
    console.log(playerName);
    
  }
};
const startGame=()=>{
    
 console.log("Spelet har påbörjat")
    }
    const handleSave=()=>{
      console.log("Spara någonting");
      
    }

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
    <button v-if="players.length==2" @click="startGame" class="start-button">Börja spela spel</button>
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
    background-color: rgb(249, 249, 24);
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
.save-button, .start-button{
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: #007BFF;
color: white;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s;
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