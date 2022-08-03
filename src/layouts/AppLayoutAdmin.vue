<template>
    <n-layout has-sider class="layout">
        <n-layout-sider
            bordered
            show-trigger="bar"
            @collapse="toggleCollapsed(true)"
            position="static"
            @expand="toggleCollapsed(false)"
            :collapsed="collapsed"
            collapse-mode="width"
            :collapsed-width="collapsedWidth"
            :native-scrollbar="false"
        >
            <n-layout-header position="static">
                <Logo :collapsed="collapsed"/>
            </n-layout-header>

            <n-layout-content>
                <Menu :collapsed-width="collapsedWidth" />
            </n-layout-content>
        </n-layout-sider>

        <n-layout-content class="layout-content">
            <n-layout-header position="static" class="shadow-sm">
                <HeaderContent :collapsed="collapsed" @toggle="toggleCollapsed" />
            </n-layout-header>
            <slot />
        </n-layout-content>
    </n-layout>
</template>

<script>
import {ref} from "vue";
import Logo from '@c/Logo.vue';
import Menu from "@/layouts/components/Menu.vue";
import HeaderContent from "@/layouts/components/HeaderContent.vue";

export default {
    name: "AppLayoutAdmin",
    components: {
        HeaderContent,
        Logo,
        Menu,
    },
    setup() {
        return {
            collapsed: ref(false),
            collapsedWidth: ref(64)
        };
    },
    methods: {
        toggleCollapsed(state) {
            this.collapsed = state;
        },
    }
}
</script>

<style lang="scss" scoped>
.layout {
    height: 100vh;

    &-content {
        background-color: #efefef;
    }
}
</style>
