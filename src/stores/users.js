import {defineStore} from 'pinia';
import {getUsers, getUserById} from '@/api/users.js';

export const Users = defineStore('users', {
    state: () => ({
        users: [],
        user: {},
        loading: true,
    }),
    getters: {
        formRules:() => {
            return {
                email: {
                    required: true,
                        message: "Пожалуйста введите email",
                },
                Profile: {
                    firstName: {
                        required: true,
                            message: "Пожалуйста введите имя",
                    },
                    lastName: {
                        required: true,
                            message: "Пожалуйста введите фамилию",
                    },
                    patronymicName: {
                        required: true,
                            message: "Пожалуйста введите отчество",
                    },
                    dateOfBirth: {
                        type: "number",
                            required: true,
                            trigger: ["blur", "change"],
                            message: "Пожалуйста выберите дату рождения",
                    },
                },
            };
        },
    },
    actions: {
        async getUsers() {
            const users = await getUsers();
            this.users = users.data;
        },
        async getUser(id) {
            const user = await getUserById(id);
            this.user = user.data;
            this.setLoading(false);
        },
        setLoading(state) {
            this.loading = state;
        }
    }
});
