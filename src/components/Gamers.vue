<script setup lang="ts">
import { ref } from 'vue';
import { Gamer } from '../models/Gamer';
//import { Gamer } from '../models/Gamer';

const userInput =ref("");
const xPlayer = "X-SPELARE";
const oPlayer ="O-SPELARE"
interface GamerProps{
    gamers:Gamer[]
}
defineProps<GamerProps>()

    const handleSubmit=()=>{
        userInput.value = "";
    }

</script>
<template>
   
    <span v-if= "gamers.length==0 ">{{ xPlayer }}</span>
    <span v-else>{{ oPlayer }}</span>

    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="userInput" >
        <button>Börja spela spel</button>

    </form>
</template>
<style scoped></style>