<template>
    <n-space class="w-full p-4" :vertical="true">
        <n-card class="h-full" content-style="padding: 8px;" header-style="padding: 8px; gap: 16px">
            <Table
                v-if="!!records"
                :columns="columns"
                :store="usersStore"
                model="users"
                buttonText="Добавить пользователя"
                :data="data"
            />
        </n-card>
    </n-space>
</template>

<script>
import {h} from "vue";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import {Auth} from '@/stores/auth.js';
import {Main} from '@/stores/main.js';
import {Users} from '@/stores/users.js';
import {formatDate} from '@/helper/index.js';
import UsersApi from '@/api/users.js';
import {NSwitch} from "naive-ui";
import Table from "@c/Table/index.vue";
import ButtonGroup from '@c/Table/ButtonGroup.vue';

export default {
    name: "Users",
    setup() {
        const authStore = Auth();
        const userApi = new UsersApi('user');

        const mainStore = Main();
        const {setBreadcrumbs, setPagination} = mainStore;
        const breadcrumbs = [
            {
                name: 'Главная',
                href: 'admin.dashboard',
            },
            {
                name: 'Пользователи',
            },
        ];
        const pagination = {
            title: `Пользователи`,
            route: 'admin.dashboard',
            icon: 'https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg'
        }
        setBreadcrumbs(breadcrumbs);
        setPagination(pagination);

        const usersStore = Users();const route = useRoute();
        const pageQuery = !!route.query?.page ? {page: Number(route.query?.page)} : {};
        usersStore.getRecords(pageQuery);

        const {records} = storeToRefs(usersStore);
        return {
            userApi,
            records,
            usersStore,
            authStore,
        }
    },
    components: {
        Table,
    },
    computed: {
        data() {
            const users = this.records;
            users.map((user) => {
                user.fullName = `${user.Profile?.lastName} ${user.Profile?.firstName} ${user.Profile?.patronymicName}` || '-';
                user.dateOfBirth = user.Profile?.dateOfBirth ? formatDate(user.Profile.dateOfBirth) : '-';
            })

            return users;
        },
        columns() {
            const $this = this;
            return [
                {
                    title: "#",
                    key: "id"
                },
                {
                    title: 'ФИО',
                    key: 'fullName'
                },
                {
                    title: "Email",
                    key: "email"
                },
                {
                    title: "Дата рождения",
                    key: "dateOfBirth"
                },
                {
                    title: "Роль",
                    key: "access"
                },
                {
                    title: "Блокировка",
                    key: "isBlocked",
                    render(row) {
                        return h(NSwitch, {
                            value: row.isBlocked,
                            "onUpdate:value": (value) => {
                                row.isBlocked = value;
                                $this.userApi.updateBlockedUser(row.id, {
                                    isBlocked: value
                                });
                            }
                        }, {
                            checked: () => "Заблокирован",
                            unchecked: () => "Разблокирован"
                        });
                    }
                },
                {
                    title: "",
                    key: "actions",
                    render(row) {
                        return h(ButtonGroup, {
                            data: {
                                row,
                                model: 'user',
                                route: 'users',
                            }
                        }, {})
                    }
                }
            ]
        }
    },
    methods: {
        deleteEvent() {
            console.log('delete');
        },
    }
}
</script>
