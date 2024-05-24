<script setup lang="ts">
interface gameHistoryProps{
    history:string[]
}
defineProps<gameHistoryProps>()

</script>
<template>
    <div class="game-history">
        <ul>
            <li v-for="(game, index) in history" 
            :key="index">
             {{ game }}</li>
        </ul>
        
    </div>
</template>

<style scoped>
.game-history {
  margin-top: 20px;
}
.game-history ul {
  list-style-type: none;
  padding: 0;
}
.game-history li {
  background-color: #f3f3f3;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>