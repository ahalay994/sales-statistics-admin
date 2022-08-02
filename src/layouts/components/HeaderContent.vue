<template>
    <n-page-header subtitle="" :title="pagination.title" @back="handleBack" class="p-4">
        <template #header>
            <NSpace justify="space-between">
                <NSpace align="center">
                    <ToggleBtn :collapsed="collapsed" @toggle="toggleCollapsed"/>
                    <RefreshBtn/>
                    <Breadcrumb/>
                </NSpace>
                <NSpace>
                    <ProfileToggle/>
                </NSpace>
            </NSpace>
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
import {Main} from '@/stores/main.js';
import router from '@/router';
import {useMessage, NSpace, NAvatar} from "naive-ui";
import Breadcrumb from "@/layouts/components/Breadcrumb.vue";
import RefreshBtn from "@/layouts/components/RefreshBtn.vue";
import ToggleBtn from '@/layouts/components/ToggleBtn.vue';
import ProfileToggle from "@/layouts/components/ProfileToggle.vue";

export default {
    name: "HeaderContent",
    components: {
        ProfileToggle,
        NSpace,
        NAvatar,
        Breadcrumb,
        RefreshBtn,
        ToggleBtn,
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
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

<style scoped>
.n-page-header-header {
    margin-bottom: 10px;
}
</style>
