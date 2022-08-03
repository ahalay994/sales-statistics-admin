<template>
    <n-card class="mt-1 p-4">
        <n-list bordered>
            <template #header>
                <n-h2 class="mb-0">Пользователь #{{ id }}</n-h2>
            </template>
            <n-list-item>
                <n-thing title="Изображение">
                    <n-avatar
                        :size="250"
                        src="/user.jpg"
                    />
                </n-thing>
            </n-list-item>

            <n-list-item v-for="item in data">
                <n-thing>
                    <template #header>
                        <span class="font-light">
                            {{item.title}}
                        </span>
                    </template>
                    <template #default>
                        <n-h3 class="mb-0">{{item.value}}</n-h3>
                    </template>
                </n-thing>
            </n-list-item>
        </n-list>

    </n-card>
</template>

<script>
import {Main} from '@/stores/main.js';
import {Users} from "@/stores/users.js";
import {storeToRefs} from "pinia";
import {formatDate} from "@/helper/index.js";

export default {
    name: "Show",
    setup() {
        const mainStore = Main();
        const usersStore = Users();

        return {
            mainStore,
            usersStore,
        }
    },
    data() {
        return {
            user: {}
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        data() {
            let data = {};
            data = {
                id: {
                    title: 'ID',
                    value: this.user?.id
                },
                email: {
                    title: 'Email',
                    value: this.user?.email
                },
                isBlocked: {
                    title: 'Блокировка',
                    value: this.user?.isBlocked ? 'Заблокирован' : 'Не заблокирован'
                },
                access: {
                    title: 'Роль',
                    value: this.user?.access || '-'
                },
                firstName: {
                    title: 'Имя',
                    value: this.user?.Profile?.firstName || '-'
                },
                lastName: {
                    title: 'Фамилия',
                    value: this.user?.Profile?.lastName || '-'
                },
                patronymicName: {
                    title: 'Отчество',
                    value: this.user?.Profile?.patronymicName || '-'
                },
                dateOfBirth: {
                    title: 'День рождения',
                    value: this.user?.Profile?.dateOfBirth ? formatDate(this.user?.Profile?.dateOfBirth) : '-'
                },
            }

            return data;
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
                name: `Пользователь #${this.id}`,
            },
        ];
        const pagination = {
            title: `Пользователь #${this.id}`,
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

<style lang="scss">
.n-thing-header {
    font-weight: 100;
}
.n-thing .n-thing-main .n-thing-main__content:not(:first-child) {
    margin-top: 0;
}
</style>
