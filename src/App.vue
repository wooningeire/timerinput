<template>
    <TimerInput  msg="value"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerInput from './components/TimerInput.vue';

export default defineComponent({
    name: 'App',
    components: {
        TimerInput,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
