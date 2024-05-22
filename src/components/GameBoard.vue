<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';

defineEmits<{
    (e:"play"):void;
}>();

interface GameProps{
    players:Player[]
    
}
const props = defineProps<GameProps>()
    

interface SquareProps {
    values:string[];
    currentPlayer:Player;
    turn:boolean
}

const state = ref<SquareProps>({
    values:['', '', '', '', '', '', '', '', ''],
    currentPlayer: props.players[0],
    turn:true
});
const message = ref(`Du startar spelet, ${props.players[0].playerName}`)
const handleClick = (index:number) => {
    if(state.value.values[index]===""){
        if(state.value.currentPlayer === props.players[0]) {
     state.value.values[index]= "X";
     state.value.currentPlayer =props.players[1]
     message.value =`Nu är det ${props.players[1].playerName}s tur`;
        }else{
            state.value.values[index]= "0";
            state.value.currentPlayer = props.players[0]
            message.value =`Nu är det din tur, ${props.players[0].playerName}`;
        }
        
    
    }
}


</script>

<template> 
<h3>{{ message }}</h3>
<div class="square">
      <div v-for="(value, i) in state?.values" class="square-item" @click="() => handleClick(i)" >{{ value }}</div>
      

</div>

</template>

    

<style scoped>
.square{
    min-width:90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.square-item{

min-width: 33%;
min-height: 250px;
border:1px solid black;
    background-color: rgb(190, 217, 217);
    
}
</style>









      

    
