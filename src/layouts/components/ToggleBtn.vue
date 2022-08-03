<template>
    <button type="button" @click="toggle" class="flex p-1 rounded-full hover:bg-gray-100">
        <n-icon size="24">
            <MenuOpenFilled/>
        </n-icon>
    </button>
</template>

<script>
import {MenuOpenFilled} from "@vicons/material";

export default {
    name: "ToggleBtn",
    components: {
        MenuOpenFilled,
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            this.$emit('toggle', !this.collapsed);
        }
    }
}
</script>
