<template>
    <n-card>
        <Tabs />
    </n-card>
</template>

<script>
import {Main} from '@/stores/main.js';
import Tabs from './Tabs/index.vue';

export default {
    name: "Create",
    components: {
        Tabs,
    },
    setup() {
        const mainStore = Main();
        return {
            mainStore,
        }
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
                name: `Создание пользователя`,
            },
        ];
        const pagination = {
            title: `Создание пользователя`,
            route: 'admin.users',
            icon: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
        }

        this.mainStore.setBreadcrumbs(breadcrumbs);
        this.mainStore.setPagination(pagination);
    }
}
</script>
