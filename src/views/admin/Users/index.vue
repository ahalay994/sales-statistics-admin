<template>
    <n-space class="w-full p-4" :vertical="true">
        <n-data-table
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :bordered="false"
        />
    </n-space>
</template>

<script>
import {Main} from '@/stores/main.js';
import {Users} from '@/stores/users.js';
import {storeToRefs} from 'pinia';
import {h} from "vue";
import {NSwitch} from "naive-ui";
import ButtonGroup from '@c/Table/ButtonGroup.vue';
import {formatDate} from '@/helper/index.js';

export default {
    name: "Users",
    setup() {
        const mainStore = Main();
        const usersStore = Users();
        const {users} = storeToRefs(usersStore)
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
        mainStore.setBreadcrumbs(breadcrumbs);
        mainStore.setPagination(pagination);
        usersStore.getUsers();

        return {
            users,
            pagination: false
        }
    },
    computed: {
        data() {
            const users = this.users;
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
                            model: row.isBlocked,
                            "onUpdate:value": (value) => row.isBlocked = value
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
        showEvent() {
            console.log(123);
        },
        editEvent() {
            console.log(456);
        },
        deleteEvent() {
            console.log(789);
        },
    }
}
</script>
