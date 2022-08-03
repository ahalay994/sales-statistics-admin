<template>
    <button type="button" class="flex p-1 rounded-full hover:bg-gray-100">
        <n-icon size="24">
            <RefreshFilled/>
        </n-icon>
    </button>
</template>

<script>
import {RefreshFilled} from "@vicons/material";

export default {
    name: "RefreshBtn",
    components: {
        RefreshFilled,
    }
}
</script>
