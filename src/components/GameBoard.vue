<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';
import RestartGame from './RestartGame.vue';



defineEmits<{
    (e:"play"):void;
}>();

interface GameProps{
    players:Player[]
    
}
const props = defineProps<GameProps>()
    

interface SquareProps {
    values:string[],
    currentPlayer:Player,
    turn:boolean,
    gameOver:boolean
}

const state = ref<SquareProps>({
    values:['', '', '', '', '', '', '', '', ''],
    currentPlayer: props.players[0],
    turn:true,
    gameOver:false
});
const message = ref(`Du startar spelet, ${props.players[0].playerName}`)
const winningSquares = ref<number[]>([]);

const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8]
];


const handleClick = (index:number) => {
    if(state.value.values[index]=== "" && !state.value.gameOver){
        if(state.value.currentPlayer === props.players[0]) {
     state.value.values[index]= "X";
     state.value.currentPlayer =props.players[1]
     message.value =`Nu är det ${props.players[1].playerName}s tur`;
        }else{
            state.value.values[index]= "O";
            state.value.currentPlayer = props.players[0]
            message.value =`Nu är det din tur, ${props.players[0].playerName}`;
        }       
    const winner = checkWinner();
    if(winner){
    state.value.gameOver =true;
    handleGameOver(winner === 'Oavgjort' ? null : winner);   
}
}
}
const checkWinner=()=>{
    for (let i =0; i < winLines.length; i++){
     const[a,b,c]=winLines[i];
     if(state.value.values[a] && state.value.values[a] === state.value.values[b] && state.value.values[a]===state.value.values[c]){
        winningSquares.value = [a, b, c];
        return state.value.values[a]
     }
    }
    if(!state.value.values.includes('')){
        return 'Oavgjort!'
    }
    return null;
}

const handleGameOver =(winner:string | null)=>{
    state.value.gameOver=true;
    if(winner){
    message.value=`Grattis!${winner}vinner spelet!`;
    }else{
   message.value='Oavgjört!';
}
}
const restartGame = () => {
  state.value = {
    values: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: props.players[0],
    turn: true,
    gameOver: false
  };
  winningSquares.value = [];
  message.value = `Du startar spelet, ${props.players[0].playerName}`;
};

</script>

<template> 
<div>
<h3>{{ message }}</h3>
<div class="square">
      <div v-for="(value, i) in state?.values"
      :key="i"
      class="square-item" 
      @click="() => handleClick(i)" 
      :class="{'winner':winningSquares.includes(i)}">
      {{ value }}
    </div>
</div>
<RestartGame @restart="restartGame"/>
<div>
    <CheckWinner ref="CheckWinnerRef" :values="state.values" @game-over="handleGameOver"/>
</div>
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
display:flex;
align-items: center;
justify-content: center;
font-size: 6rem;    
}
.square-item .winner {
text-color:red
}
</style>









      

    
