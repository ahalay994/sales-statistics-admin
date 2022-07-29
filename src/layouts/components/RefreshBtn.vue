<template>
    <button type="button" class="flex p-1 rounded-full hover:bg-gray-100">
        <NIcon size="24">
            <RefreshFilled />
        </NIcon>
    </button>
</template>

<script>
import {NIcon} from 'naive-ui';
import {
    RefreshFilled
} from "@vicons/material";

export default {
    name: "RefreshBtn",
    components: {
        NIcon,
        RefreshFilled,
    }
}
</script>

<style scoped>

</style>
