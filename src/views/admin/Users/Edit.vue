<template>
    <n-card v-if="!loading && !!user">
        <Tabs :data="user" />
    </n-card>
</template>

<script>
import {storeToRefs} from "pinia";
import {Main} from '@/stores/main.js';
import {Users} from "@/stores/users.js";
import {Access} from "@/stores/access.js";
import Tabs from './Tabs/index.vue';

export default {
    name: "Edit",
    components: {
        Tabs,
    },
    setup() {
        const mainStore = Main();
        const usersStore = Users();
        const accessStore = Access();

        accessStore.getRecords(true);
        const {loading} = storeToRefs(usersStore);
        return {
            mainStore,
            usersStore,
            loading,
        }
    },
    data() {
        return {
            user: null,
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    mounted() {
        const breadcrumbs = [
            {
                name: 'Главная',
                href: 'admin.dashboard',
            },
            {
                name: 'Пользователи',
                href: 'admin.users',
            },
            {
                name: `Редактирование пользователя #${this.id}`,
            },
        ];
        const pagination = {
            title: `Редактирование пользователя #${this.id}`,
            route: 'admin.users',
            icon: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
        }

        this.mainStore.setBreadcrumbs(breadcrumbs);
        this.mainStore.setPagination(pagination);
        this.usersStore.getRecord(this.id);
        const {record} = storeToRefs(this.usersStore);
        this.user = record;
    }
}
</script>
