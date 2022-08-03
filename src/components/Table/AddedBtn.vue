<template>
    <n-divider v-if="divider" vertical class="!h-full !mx-4" />
    <router-link
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all whitespace-nowrap text-sm"
        :to="{name: `admin.${model}.create`}"
    >
        {{buttonText}}
    </router-link>
</template>

<script>
export default {
    name: "AddedBtn",
    props: {
        model: {
            type: String,
        },
        buttonText: {
            type: String,
        },
        divider: {
            type: Boolean,
            default: true,
        },
    }
}
</script>
