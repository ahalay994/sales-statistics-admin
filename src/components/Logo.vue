<template>
    <div class="logo">
        <img src="/vite.svg" alt="" :class="{ 'mr-2': !collapsed }" />
        <h2 v-show="!collapsed" class="title">NaiveUiAdmin</h2>
    </div>
</template>

<script>
export default {
    name: "Logo",
    props: {
        collapsed: {
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    white-space: nowrap;
    img {
        width: auto;
        height: 32px;
    }
    .title {
        margin-bottom: 0;
    }
}
</style>
