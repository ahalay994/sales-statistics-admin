<template>
    <n-card v-if="!loading">
        <Tabs :data="user" />
    </n-card>
</template>

<script>
import {Main} from '@/stores/main.js';
import {Users} from "@/stores/users.js";
import {Access} from "@/stores/access.js";
import Tabs from './Tabs/index.vue';
import {storeToRefs} from "pinia";

export default {
    name: "Edit",
    components: {
        Tabs,
    },
    setup() {
        const mainStore = Main();
        const usersStore = Users();
        const accessStore = Access();

        accessStore.getAccesses(true);
        const {loading} = storeToRefs(usersStore);
        return {
            mainStore,
            usersStore,
            loading,
        }
    },
    data() {
        return {
            user: {},
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
        this.usersStore.getUser(this.id);
        const {user} = storeToRefs(this.usersStore)
        this.user = user;
    }
}
</script>
