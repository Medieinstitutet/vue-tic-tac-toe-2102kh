<script setup lang="ts">
import { ref } from 'vue';
import { Player } from '../models/Player';
import RestartGame from './RestartGame.vue';
import GameHistory from './GameHistory.vue';



defineEmits<{
    (e:"play"):void;
}>();

interface GameProps{
    players:Player[];
    gameHistory:string[];
    
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
const gameHistory =ref<string[]>([]);
const playerScores = ref({ [props.players[0].playerName]: 0, [props.players[1].playerName]: 0 });
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
    if(winner !==null){
    state.value.gameOver = true;
    handleGameOver(winner);   
   
    }
}
}

const checkWinner=()=>{
    for (let i =0; i < winLines.length; i++){
     const[a,b,c]=winLines[i];
     if(state.value.values[a] && 
     state.value.values[a] === state.value.values[b] &&
      state.value.values[a]===state.value.values[c]){
        winningSquares.value = [a, b, c];
        return state.value.values[a]
     }
    }
    if(!state.value.values.includes('')){
        return 'draw';
    }
    return null;
}

const handleGameOver =(winner:string | null)=>{
    state.value.gameOver=true;
    
    if(winner &&winner !='draw'){
    const winningPlayer=winner==='X' ? props.players[0].playerName : props.players[1].playerName;
    message.value=`Grattis! ${winningPlayer} vinner spelet!`;
    playerScores.value[winningPlayer]++;
    gameHistory.value.push(`Vinnare ${winningPlayer} (Poäng: ${playerScores.value[winningPlayer]})`);
    }else if (winner==='draw'){
   message.value='Oavgjortt!';
   gameHistory.value.push('Spelet slutade oavgjort!')
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
<div class="app1">
<h3>{{ message }}</h3>
<div class="square">
      <div v-for="(value, i) in state.values"
      :key="i"
      @click="()=> handleClick(i)" 
      :class="['square-item',{'winner':winningSquares.includes(i)}]"
      >
      {{ value }}
    </div>
</div>
<RestartGame @restart="restartGame"/>
<GameHistory :history="gameHistory"/>
</div>

</template>
<style scoped>

.square{
    width:80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.square-item{
width: 25%;
min-height:100px;
border:1px solid rgb(20, 1, 1);
background-color: rgb(247, 252, 180);
display:flex;
align-items: center;
justify-content: center;
font-size: 6rem;  
color: blue;  
border-radius: 5%;
margin: 0.1rem;
}
.square-item.winner {
color:red
}
/* Media query for tablets */
@media (max-width: 768px) {
  .square-item {
    width: 30vw;
    height: 150px;
    font-size: 4rem;
  }
}


</style>









      

    
