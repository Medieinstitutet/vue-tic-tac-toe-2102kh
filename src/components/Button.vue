<script srtup lang="ts">

interface ButtonProps {
    buttonText:string;
    title:string
}
defineProps<ButtonProps>()

 const emit= defineEmits<{
     (e:"onClick"
    ):void;}>()
</script>
<template>
    <button :title="title" @click="$emit('onClick')">{{ buttonText }}</button>
</template>
<style scoped></style>