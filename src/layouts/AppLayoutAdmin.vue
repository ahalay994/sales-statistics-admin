<template>
    <NLayout has-sider class="layout">
        <NLayoutSider
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
            <NLayoutHeader position="static">
                <logo :collapsed="collapsed"/>
            </NLayoutHeader>

            <NLayoutContent>
                <Menu :collapsed-width="collapsedWidth" />
            </NLayoutContent>
        </NLayoutSider>

        <NLayoutContent class="layout-content">
            <NLayoutHeader position="static" class="shadow-sm">
                <HeaderContent :collapsed="collapsed" @toggle="toggleCollapsed" />
            </NLayoutHeader>
            <slot />
        </NLayoutContent>
    </NLayout>
</template>

<script>
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NSpace,
} from 'naive-ui';
import {ref} from "vue";
import Logo from '@c/Logo.vue';
import Menu from "@/layouts/components/Menu.vue";
import HeaderContent from "@/layouts/components/HeaderContent.vue";

export default {
    name: "AppLayoutAdmin",
    components: {
        HeaderContent,
        NLayout,
        NLayoutHeader,
        NLayoutContent,
        NLayoutFooter,
        NLayoutSider,
        NSpace,
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
