<template>
    <n-page-header subtitle="" :title="pagination.title" @back="handleBack" class="p-4">
        <template #header>
            <n-space justify="space-between">
                <n-space align="center">
                    <ToggleBtn :collapsed="collapsed" @toggle="toggleCollapsed"/>
                    <RefreshBtn/>
                    <Breadcrumb/>
                </n-space>
                <n-space>
                    <ProfileToggle/>
                </n-space>
            </n-space>
        </template>
        <template #avatar>
            <n-avatar
                color="#ffffff"
                round
                :src="pagination.icon"
            />
        </template>
    </n-page-header>
</template>

<script>
import {storeToRefs} from 'pinia';
import router from '@/router';
import {Main} from '@/stores/main.js';
import {useMessage} from "naive-ui";
import Breadcrumb from "@/layouts/components/Breadcrumb.vue";
import RefreshBtn from "@/layouts/components/RefreshBtn.vue";
import ToggleBtn from '@/layouts/components/ToggleBtn.vue';
import ProfileToggle from "@/layouts/components/ProfileToggle.vue";

export default {
    name: "HeaderContent",
    components: {
        Breadcrumb,
        RefreshBtn,
        ToggleBtn,
        ProfileToggle,
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const message = useMessage();
        const main = Main();
        const {pagination} = storeToRefs(main);
        return {
            message,
            pagination,
        };
    },
    computed: {
        onBack() {
            return this.pagination.route ? this.handleBack() : undefined;
        }
    },
    methods: {
        handleBack() {
            router.push({name: this.pagination.route});
        },
        toggleCollapsed() {
            this.$emit('toggle', !this.collapsed);
        },
    }
}
</script>

<style scoped lang="scss">
.n-page-header-header {
    margin-bottom: 10px;
}
</style>
