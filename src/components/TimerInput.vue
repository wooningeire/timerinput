<template>
    <div class="hello" @focus.capture="onfocus">
        <span class="3" data-placeholder="00" contenteditable></span>
        :
        <span class="2" data-placeholder="00" contenteditable></span>
        :
        <span class="1" data-placeholder="00" contenteditable></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

let inputs: Element[];

export default defineComponent({
    name: "TimerInput",
    props: {
        msg: String,
    },

    data: () => ({
        value: Number,
    }),

    mounted() {
        inputs = [...document.querySelectorAll("[contenteditable]")];
        console.log(inputs);
    },

    methods: {
        onfocus() {
            const currentInputIndex = inputs.indexOf(document.activeElement as Element);
            console.log(currentInputIndex);
        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    text-align: right;
}

[data-placeholder]:empty::before {
    content: attr(data-placeholder);
}
</style>
