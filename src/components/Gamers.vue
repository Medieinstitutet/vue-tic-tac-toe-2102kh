<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';
import AddPlayer from './AddPlayer.vue';
import PlayerPresentation from './PlayerPresentation.vue';

const players=ref<Player[]>([]);

const addPlayer =(text:string)=>{
    players.value.push(new Player(text))

}
//const userInput =ref("");
interface GamerProps{
    players:Player[]
}
defineProps<GamerProps>()

   

</script>
<template>
   <AddPlayer @add="addPlayer"/>
   <ul>
    <PlayerPresentation v-for="(player,i) in players"
     :player="player"
     :i="i"
     ></PlayerPresentation>
   </ul>
   
</template>
<style scoped></style>