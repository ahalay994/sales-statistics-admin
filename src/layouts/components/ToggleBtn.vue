<template>
    <button type="button" @click="toggle" class="flex p-1 rounded-full hover:bg-gray-100">
        <NIcon size="24">
            <MenuOpenFilled />
        </NIcon>
    </button>
</template>

<script>
import {NIcon} from 'naive-ui';
import {
    MenuOpenFilled
} from "@vicons/material";

export default {
    name: "ToggleBtn",
    components: {
        NIcon,
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

<style scoped>

</style>
